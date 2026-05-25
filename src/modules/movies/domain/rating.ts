import { User } from "../../auth/domain/auth";
import { Movie } from "./movie";
import { t } from "elysia";

type RatingMovie = Omit<Movie, "ratings">;

export interface Rating {
  id: string;
  movieId: string;
  userId: string;
  stars: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  movie: RatingMovie;
}

export interface RatingInput {
  movieId: string;
  userId: string;
  stars: number;
}

export const ratingInputSchema = t.Object({
  userId: t.String(),
  movieId: t.String(),
  stars: t.Number(),
});
export const deleteRatingSchema = t.Object({
  userId: t.String(),
  movieId: t.String(),
});
export const checkRatingSchema = t.Object({
  userId: t.String(),
  movieId: t.String(),
});


