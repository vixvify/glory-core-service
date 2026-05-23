import { t } from "elysia";
import { Rating } from "./rating";

export interface Movie {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  youtubeUrl: string;
  views: number;
  ratings: Rating[];
  year: number;
  matchRate: number;
  ageRating: string;
  duration: number;
}

export interface CreateMovie {
  title: string;
  description: string;
  category: string;
  thumbnail: File;
  youtubeUrl: string;
  year: number;
  matchRate: number;
  ageRating: string;
  duration: number;
}

export interface UpdateMovie {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: File | string;
  youtubeUrl: string;
  year: number;
  matchRate: number;
  ageRating: string;
  duration: number;
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
  category: t.String(),
  thumbnail: t.File(),
  youtubeUrl: t.String(),
  year: t.Numeric(),
  matchRate: t.Numeric(),
  ageRating: t.String(),
  duration: t.Numeric(),
});

export const updateMovieSchema = t.Object({
  id: t.String(),
  title: t.String(),
  description: t.String(),
  category: t.String(),
  thumbnail: t.Union([t.File(), t.String()]),
  youtubeUrl: t.String(),
  year: t.Numeric(),
  matchRate: t.Numeric(),
  ageRating: t.String(),
  duration: t.Numeric(),
});

export const searchMovieSchema = t.Object({
  q: t.Optional(t.String()),
});

export const favoriteSchema = t.Object({
  movieId: t.String(),
});

