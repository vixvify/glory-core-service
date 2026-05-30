import { t, Static } from "elysia";

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: "admin" | "user";
}

export const registerUserBodySchema = t.Object({
  name: t.String({ minLength: 2 }),
  email: t.String(),
  password: t.String({ minLength: 6 }),
});

export type RegisterUserBodyInput = Static<typeof registerUserBodySchema>;

export const loginUserBodySchema = t.Object({
  email: t.String(),
  password: t.String({ minLength: 6 }),
});

export type LoginUserBodyInput = Static<typeof loginUserBodySchema>;
