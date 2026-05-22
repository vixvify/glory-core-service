import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { AppError } from "../core/error";
import { formatError } from "../core/interceptor";
import { apiRouter } from "../routes";

export const server = new Elysia()
  .use(cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }))
  .error({
    APP_ERROR: AppError,
  })
  .onError(({ code, error, set }) => {
    if (error instanceof AppError) {
      set.status = error.statusCode;
      return formatError(error);
    }
    if (code === "VALIDATION") {
      set.status = 400;
      return {
        success: false,
        data: null,
        error: "Validation error",
        details: error.message,
      };
    }
    set.status = 500;
    return formatError(error);
  })
  .use(apiRouter);
