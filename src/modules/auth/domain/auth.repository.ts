import { User, RegisterUserInput } from "./auth";

export interface AuthRepository {
  findByEmail(email: string): Promise<User | null>;
  findByEmailWithPassword(email: string): Promise<(User & { password?: string }) | null>;
  findById(id: string): Promise<User | null>;
  create(data: RegisterUserInput & { passwordHash: string }): Promise<User>;
}
