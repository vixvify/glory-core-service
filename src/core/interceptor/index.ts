import { ApiResponse } from "../types";

export function formatSuccess<T>(data: T, message?: string): ApiResponse<T> {
  return {
    success: true,
    data,
    message,
  };
}

export function formatError(error: unknown): ApiResponse<null> {
  const message = error instanceof Error ? error.message : String(error);
  return {
    success: false,
    data: null,
    error: message,
  };
}
