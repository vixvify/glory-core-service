import { User, RegisterUserBodyInput } from "./auth";

export interface AuthRepository {
  findByEmail(email: string): Promise<User | null>;
  findByEmailWithPassword(email: string): Promise<(User & { password?: string }) | null>;
  findById(id: string): Promise<User | null>;
  create(data: Omit<RegisterUserBodyInput, "password"> & { passwordHash: string }): Promise<User>;
}
