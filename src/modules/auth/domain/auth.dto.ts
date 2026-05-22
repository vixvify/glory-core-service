import { t } from "elysia";

export interface RegisterDTO {
  username: string;
  email: string;
  password?: string;
  name?: string;
}

export interface LoginDTO {
  username?: string;
  email?: string;
  password?: string;
}

export interface SafeUserDTO {
  id: string;
  username: string;
  email: string;
  name: string | null;
  role: string;
  createdAt: Date | string;
  token?: string;
}

export const registerSchema = t.Object({
  username: t.String({ minLength: 3 }),
  email: t.String(),
  password: t.String({ minLength: 6 }),
});

export const loginSchema = t.Object({
  username: t.String({ minLength: 3 }),
  password: t.String({ minLength: 6 }),
});
