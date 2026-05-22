import { t } from "elysia";

export interface CreateMovieDTO {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  category: string;
  rating: number;
  releaseYear: number;
  duration: number;
}

export interface UpdateMovieDTO {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string | null;
  category: string;
  rating: number;
  releaseYear: number;
  duration: number;
  createdAt?: string;
}

export interface SearchMovieDTO {
  q?: string;
}

export interface FavoriteDTO {
  movieId: string;
}

export const createMovieSchema = t.Object({
  title: t.String(),
  description: t.String(),
  imageUrl: t.String(),
  videoUrl: t.Optional(t.String()),
  category: t.String(),
  rating: t.Numeric(),
  releaseYear: t.Numeric(),
  duration: t.Numeric(),
});

export const updateMovieSchema = t.Object({
  id: t.String(),
  title: t.String(),
  description: t.String(),
  imageUrl: t.String(),
  videoUrl: t.Optional(t.Nullable(t.String())),
  category: t.String(),
  rating: t.Numeric(),
  releaseYear: t.Numeric(),
  duration: t.Numeric(),
  createdAt: t.Optional(t.String()),
});

export const searchMovieSchema = t.Object({
  q: t.Optional(t.String()),
});

export const favoriteSchema = t.Object({
  movieId: t.String(),
});

