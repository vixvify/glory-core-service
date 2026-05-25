import { User } from "./domain/auth";

export class AuthFactory {
  static toSafeUserDTO(user: User, token?: string): User & { token?: string } {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    };
  }
}
