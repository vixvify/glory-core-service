import { User } from "../../../core/types";
import { RegisterDTO } from "./auth.dto";

export interface AuthRepository {
  findByUsernameOrEmail(username: string, email: string): Promise<User | null>;
  findByUsernameOrEmailWithPassword(usernameOrEmail: string): Promise<(User & { password: string }) | null>;
  findById(id: string): Promise<User | null>;
  create(data: RegisterDTO & { passwordHash: string }): Promise<User>;
}
