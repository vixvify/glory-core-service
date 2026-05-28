import { CreateMovieBodyInput, UpdateMovieBodyInput } from "./movie";
import { Movie as PrismaMovie } from "@prisma/client";
import { Rating, AddRatingBodyInput, GetRatingsQueryInput, UpdateRatingBodyInput } from "./rating";

export interface MovieRepository {
  findAll(): Promise<PrismaMovie[]>;
  search(q: string): Promise<PrismaMovie[]>;
  findByCategory(category: string): Promise<PrismaMovie[]>;
  findById(id: string): Promise<PrismaMovie | null>;
  create(
    data: Omit<CreateMovieBodyInput, "thumbnail"> & { thumbnail: string },
  ): Promise<PrismaMovie>;
  update(
    id: string,
    data: Omit<UpdateMovieBodyInput, "thumbnail"> & { thumbnail: string },
  ): Promise<PrismaMovie>;
  delete(id: string): Promise<PrismaMovie>;
  getFavorites(userId: string): Promise<string[]>;
  checkFavorite(userId: string, movieId: string): Promise<boolean>;
  addFavorite(userId: string, movieId: string): Promise<void>;
  removeFavorite(userId: string, movieId: string): Promise<void>;
  addRating(data: AddRatingBodyInput): Promise<void>;
  getRatingsByUserIdAndMovieId(
    data: GetRatingsQueryInput,
  ): Promise<Rating[]>;
  deleteRating(userId: string, movieId: string): Promise<void>;
  checkRating(userId: string, movieId: string): Promise<boolean>;
  updateRating(data: UpdateRatingBodyInput): Promise<void>;
}
