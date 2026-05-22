import { Elysia } from "elysia";
import { verifyJWT } from "../core/utils/security";
import { prisma } from "../lib/prisma";
import { UnauthorizedError } from "../core/error";
import { User } from "../core/types";

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

      const user = await prisma.user.findUnique({
        where: { id: payload.id },
        select: {
          id: true,
          username: true,
          email: true,
          name: true,
          role: true,
          createdAt: true,
        },
      });

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
