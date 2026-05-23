import { hashPassword, verifyPassword, signJWT } from "../../core/utils/security";
import { ConflictError, UnauthorizedError } from "../../core/error";
import { User, RegisterUser, LoginUser } from "./domain/auth.dto";
import { AuthRepository } from "./domain/auth.repository";
import { AuthFactory } from "./factory";

export class AuthService {
  constructor(private repo: AuthRepository) { }

  async register(data: RegisterUser): Promise<User> {
    const existing = await this.repo.findByEmail(data.email);
    if (existing) {
      throw new ConflictError("Email already exists");
    }

    const passwordHash = await hashPassword(data.password);
    return this.repo.create({
      name: data.name,
      email: data.email,
      password: data.password,
      passwordHash,
    } as any);
  }

  async login(data: LoginUser): Promise<User & { token?: string }> {
    const user = await this.repo.findByEmailWithPassword(data.email);
    if (!user) {
      throw new UnauthorizedError("Invalid email or password");
    }

    const isPasswordValid = await verifyPassword(data.password, user.password || "");
    if (!isPasswordValid) {
      throw new UnauthorizedError("Invalid email or password");
    }

    const token = await signJWT({ id: user.id });

    return AuthFactory.toSafeUserDTO(user, token);
  }

  async me(userId: string): Promise<User | null> {
    return this.repo.findById(userId);
  }
}
