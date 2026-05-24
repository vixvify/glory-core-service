import { User, RegisterUserDTO } from "./auth.dto";

export interface AuthRepository {
  findByEmail(email: string): Promise<User | null>;
  findByEmailWithPassword(email: string): Promise<(User & { password?: string }) | null>;
  findById(id: string): Promise<User | null>;
  create(data: RegisterUserDTO & { passwordHash: string }): Promise<User>;
}
