import { CreateMovie } from "./movie.dto";
import { Movie as PrismaMovie } from "@prisma/client";

export interface MovieRepository {
  findAll(): Promise<PrismaMovie[]>;
  search(q: string): Promise<PrismaMovie[]>;
  findByCategory(category: string): Promise<PrismaMovie[]>;
  findById(id: string): Promise<PrismaMovie | null>;
  create(data: Omit<CreateMovie, "thumbnail"> & { thumbnail: string }): Promise<PrismaMovie>;
  update(id: string, data: Omit<CreateMovie, "thumbnail"> & { thumbnail: string }): Promise<PrismaMovie>;
  delete(id: string): Promise<PrismaMovie>;
  getFavorites(userId: string): Promise<string[]>;
  checkFavorite(userId: string, movieId: string): Promise<boolean>;
  addFavorite(userId: string, movieId: string): Promise<void>;
  removeFavorite(userId: string, movieId: string): Promise<void>;
}
