import { Movie } from "../../../core/types";
import { CreateMovieDTO, UpdateMovieDTO } from "./movie.dto";

export interface MovieRepository {
  findAll(): Promise<Movie[]>;
  search(q: string): Promise<Movie[]>;
  findByCategory(category: string): Promise<Movie[]>;
  findById(id: string): Promise<Movie | null>;
  create(data: CreateMovieDTO): Promise<Movie>;
  update(id: string, data: UpdateMovieDTO): Promise<Movie>;
  delete(id: string): Promise<Movie>;
  getFavorites(userId: string): Promise<string[]>;
  checkFavorite(userId: string, movieId: string): Promise<boolean>;
  addFavorite(userId: string, movieId: string): Promise<void>;
  removeFavorite(userId: string, movieId: string): Promise<void>;
}
