import { User } from "../../core/types";
import { SafeUserDTO } from "./domain/auth.dto";

export class AuthFactory {
  static toSafeUserDTO(user: User, token?: string): SafeUserDTO {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
      token,
    };
  }
}
