import { prisma } from "../../lib/prisma";
import { User, RegisterUserInput } from "../../modules/auth/domain/auth";
import { AuthRepository } from "../../modules/auth/domain/auth.repository";

export class AuthRepositoryImpl implements AuthRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) return null;

    return {
      id: user.id,
      name: user.name || "",
      email: user.email,
      role: user.role as "admin" | "user",
    };
  }

  async findByEmailWithPassword(email: string): Promise<(User & { password?: string }) | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) return null;

    return {
      id: user.id,
      name: user.name || "",
      email: user.email,
      role: user.role as "admin" | "user",
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
      name: user.name || "",
      email: user.email,
      role: user.role as "admin" | "user",
    };
  }

  async create(data: RegisterUserInput & { password: string }): Promise<User> {
    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        name: data.name,
        role: "user",
      },
    });

    return {
      id: user.id,
      name: user.name || "",
      email: user.email,
      role: user.role as "admin" | "user",
    };
  }
}
