import { User } from "../../auth/domain/auth";
import { Movie } from "./movie";
import { t, Static } from "elysia";

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


export const addRatingBodySchema = t.Object({
  userId: t.String(),
  movieId: t.String(),
  stars: t.Number(),
});
export type AddRatingBodyInput = Static<typeof addRatingBodySchema>;

export const getRatingsQuerySchema = t.Object({
  userId: t.String(),
  movieId: t.String(),
});
export type GetRatingsQueryInput = Static<typeof getRatingsQuerySchema>;

export const deleteRatingBodySchema = t.Object({
  userId: t.String(),
  movieId: t.String(),
});
export type DeleteRatingBodyInput = Static<typeof deleteRatingBodySchema>;

export const checkRatingQuerySchema = t.Object({
  userId: t.String(),
  movieId: t.String(),
});
export type CheckRatingQueryInput = Static<typeof checkRatingQuerySchema>;

export const updateRatingBodySchema = t.Object({
  userId: t.String(),
  movieId: t.String(),
  stars: t.Number(),
});
export type UpdateRatingBodyInput = Static<typeof updateRatingBodySchema>;
