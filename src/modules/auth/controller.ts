import { Elysia } from "elysia";
import { authMiddleware } from "../../middleware/auth";
import { AuthRepositoryImpl } from "../../infrastructure/auth/auth.repository";
import { AuthService } from "./service";
import { formatSuccess } from "../../core/interceptor";
import { User, registerSchema, loginSchema } from "./domain/auth.dto";

const repo = new AuthRepositoryImpl();
const service = new AuthService(repo);

export const authRouter = new Elysia({ prefix: "/auth" })
  .use(authMiddleware)
  .post(
    "/register",
    async ({ body }) => {
      const user = await service.register(body);
      return formatSuccess(user, "User registered successfully");
    },
    {
      body: registerSchema,
    }
  )
  .post(
    "/login",
    async ({ body }) => {
      const safeUser = await service.login(body);
      return formatSuccess(safeUser, "Logged in successfully");
    },
    {
      body: loginSchema,
    }
  )
  .post("/logout", async () => {
    return formatSuccess(null, "Logged out successfully");
  })
  .get(
    "/me",
    async ({ user }) => {
      return formatSuccess(user as User);
    },
    {
      requireAuth: true,
    }
  );
