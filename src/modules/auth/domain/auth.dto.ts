import { t } from "elysia";

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: "admin" | "user";
}

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export const registerSchema = t.Object({
  name: t.String({ minLength: 2 }),
  email: t.String(),
  password: t.String({ minLength: 6 }),
});

export const loginSchema = t.Object({
  email: t.String(),
  password: t.String({ minLength: 6 }),
});
