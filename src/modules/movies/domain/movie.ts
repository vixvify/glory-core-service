import { t } from "elysia";
import { Rating } from "./rating";
import { User } from "../../auth/domain/auth.dto";

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
    createdAt: Date;
    updatedAt: Date;
}

export interface FavoriteMovie {
    id: string;
    userId: string;
    movieId: string;
    user: User;
    movie: Movie;
    createdAt: Date;
}

export interface CreateMovieInput {
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

export interface UpdateMovieInput {
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
    year: t.String(),
    duration: t.String(),
    matchRate: t.String(),
    ageRating: t.String(),
});

export const updateMovieSchema = t.Object({
    title: t.String(),
    description: t.String(),
    category: t.String(),
    thumbnail: t.Union([t.File(), t.String()]),
    youtubeUrl: t.String(),
    year: t.String(),
    duration: t.String(),
    matchRate: t.String(),
    ageRating: t.String(),
});

export const searchMovieSchema = t.Object({
    q: t.Optional(t.String()),
});

export const favoriteSchema = t.Object({
    movieId: t.String(),
});

export const CATEGORIES = [
  "Action",
  "Sci-Fi",
  "Horror",
  "Comedy",
  "Thriller",
  "Drama",
  "Romance",
  "Adventure",
  "Fantasy",
  "Animation",
  "Biography",
  "Documentary",
  "Family",
  "Music",
  "Mystery",
  "Sport",
  "Western"
] as const;

export const AGE_RATINGS = [
  "G",
  "PG",
  "PG-13",
  "NC-17",
  "R"
] as const;
