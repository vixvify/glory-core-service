import { hashPassword, verifyPassword, signJWT } from "../../core/utils/security";
import { AppError, ConflictError, UnauthorizedError, BadRequestError } from "../../core/error";
import { User, RegisterUserDTO, LoginUserDTO } from "./domain/auth.dto";
import { AuthRepository } from "./domain/auth.repository";
import { AuthFactory } from "./factory";

export class AuthService {
  constructor(private repo: AuthRepository) { }

  async register(data: RegisterUserDTO): Promise<User> {
    try {
      const existing = await this.repo.findByEmail(data.email);
      if (existing) {
        throw new ConflictError("Email already exists");
      }

      const passwordHash = await hashPassword(data.password);
      return await this.repo.create({
        name: data.name,
        email: data.email,
        password: data.password,
        passwordHash,
      } as any);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message = error instanceof Error ? error.message : "Failed to register user";
      throw new BadRequestError(message, error);
    }
  }

  async login(data: LoginUserDTO): Promise<User & { token?: string }> {
    try {
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
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message = error instanceof Error ? error.message : "Failed to login";
      throw new BadRequestError(message, error);
    }
  }

  async me(userId: string): Promise<User | null> {
    try {
      return await this.repo.findById(userId);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message = error instanceof Error ? error.message : "Failed to retrieve user profile";
      throw new BadRequestError(message, error);
    }
  }
}
