import { User } from "./domain/auth.dto";

export class AuthFactory {
  static toSafeUserDTO(user: User, token?: string): User & { token?: string } {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      password: "", // Avoid leaking password
      token,
    };
  }
}
