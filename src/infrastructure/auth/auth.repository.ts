import { prisma } from "../../lib/prisma";
import { User } from "../../core/types";
import { AuthRepository } from "../../modules/auth/domain/auth.repository";
import { RegisterDTO } from "../../modules/auth/domain/auth.dto";

export class AuthRepositoryImpl implements AuthRepository {
  async findByUsernameOrEmail(username: string, email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { username },
          { email },
        ],
      },
    });

    if (!user) return null;

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
    };
  }

  async findByUsernameOrEmailWithPassword(usernameOrEmail: string): Promise<(User & { password: string }) | null> {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { username: usernameOrEmail },
          { email: usernameOrEmail },
        ],
      },
    });

    if (!user) return null;

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
      password: user.password,
    };
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) return null;

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
    };
  }

  async create(data: RegisterDTO & { passwordHash: string }): Promise<User> {
    const user = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: data.passwordHash,
        name: data.name || null,
        role: "user",
      },
    });

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
    };
  }
}
