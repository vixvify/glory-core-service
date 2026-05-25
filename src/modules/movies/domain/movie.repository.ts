import { CreateMovieInput, UpdateMovieInput } from "./movie";
import { Movie as PrismaMovie } from "@prisma/client";
import { Rating, RatingInput } from "./rating";

export interface MovieRepository {
  findAll(): Promise<PrismaMovie[]>;
  search(q: string): Promise<PrismaMovie[]>;
  findByCategory(category: string): Promise<PrismaMovie[]>;
  findById(id: string): Promise<PrismaMovie | null>;
  create(data: Omit<CreateMovieInput, "thumbnail"> & { thumbnail: string }): Promise<PrismaMovie>;
  update(id: string, data: Omit<UpdateMovieInput, "thumbnail"> & { thumbnail: string }): Promise<PrismaMovie>;
  delete(id: string): Promise<PrismaMovie>;
  getFavorites(userId: string): Promise<string[]>;
  checkFavorite(userId: string, movieId: string): Promise<boolean>;
  addFavorite(userId: string, movieId: string): Promise<void>;
  removeFavorite(userId: string, movieId: string): Promise<void>;
  addRating(data: RatingInput): Promise<void>;
  getRatingsByUserId(userId: string): Promise<Rating[]>;
  getRatingByMovieId(movieId: string): Promise<Rating[]>;
  deleteRating(userId: string, movieId: string): Promise<void>;
  checkRating(userId: string, movieId: string): Promise<boolean>;
  updateRating(data: RatingInput): Promise<void>;
}
