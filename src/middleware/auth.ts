import { Elysia } from "elysia";
import { verifyJWT } from "../core/utils/security";
import { prisma } from "../lib/prisma";
import { UnauthorizedError } from "../core/error";
import { User } from "../modules/auth/domain/auth.dto";

export const authMiddleware = new Elysia({ name: "auth-middleware" })
  .derive({ as: "global" }, async ({ request }) => {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return { user: null };
    }

    const token = authHeader.split(" ")[1];
    try {
      const payload = await verifyJWT(token);
      if (!payload || !payload.id) {
        return { user: null };
      }

      const dbUser = await prisma.user.findUnique({
        where: { id: payload.id },
      });

      if (!dbUser) {
        return { user: null };
      }

      const user: User = {
        id: dbUser.id,
        name: dbUser.name || "",
        email: dbUser.email,
        role: dbUser.role as "admin" | "user",
      };

      return { user };
    } catch (error) {
      return { user: null };
    }
  })
  .macro(({ onBeforeHandle }) => ({
    requireAuth(required = true) {
      if (!required) return;
      onBeforeHandle(({ user }: { user?: User | null }) => {
        if (!user) {
          throw new UnauthorizedError("You must be logged in to access this resource");
        }
      });
    },
  }));
