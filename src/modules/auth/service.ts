import { hashPassword, verifyPassword, signJWT } from "../../core/utils/security";
import { ConflictError, UnauthorizedError } from "../../core/error";
import { User } from "../../core/types";
import { AuthRepository } from "./domain/auth.repository";
import { RegisterDTO, LoginDTO, SafeUserDTO } from "./domain/auth.dto";
import { AuthFactory } from "./factory";

export class AuthService {
  constructor(private repo: AuthRepository) {}

  async register(data: RegisterDTO): Promise<User> {
    const username = data.username || data.email;
    const existing = await this.repo.findByUsernameOrEmail(username, data.email);
    if (existing) {
      throw new ConflictError("Username or email already exists");
    }

    const passwordHash = await hashPassword(data.password || "");
    return this.repo.create({
      username,
      email: data.email,
      passwordHash,
      name: data.name,
    });
  }

  async login(data: LoginDTO): Promise<SafeUserDTO> {
    const usernameOrEmail = data.username || data.email || "";
    const user = await this.repo.findByUsernameOrEmailWithPassword(usernameOrEmail);
    if (!user) {
      throw new UnauthorizedError("Invalid username or password");
    }

    const isPasswordValid = await verifyPassword(data.password || "", user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedError("Invalid username or password");
    }

    const token = await signJWT({ id: user.id });

    return AuthFactory.toSafeUserDTO(user, token);
  }

  async me(userId: string): Promise<User | null> {
    return this.repo.findById(userId);
  }
}
