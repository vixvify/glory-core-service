import { Elysia } from "elysia";
import { authRouter } from "../modules/auth/controller";
import { movieRouter } from "../modules/movies/controller";
import { masterDataRouter } from "../modules/masterdata/controller";

export const apiRouter = new Elysia({ prefix: "/api" })
  .use(authRouter)
  .use(movieRouter)
  .use(masterDataRouter);
