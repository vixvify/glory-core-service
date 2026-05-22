import { NotFoundError } from "../../core/error";
import { Movie } from "../../core/types";
import { MovieRepository } from "./domain/movie.repository";
import { CreateMovieDTO, UpdateMovieDTO } from "./domain/movie.dto";
import { MovieFactory } from "./factory";

export class MovieService {
  constructor(private repo: MovieRepository) {}

  async getAllMovies(): Promise<Movie[]> {
    const movies = await this.repo.findAll();
    return MovieFactory.toMovieDTOList(movies);
  }

  async searchMovies(q: string): Promise<Movie[]> {
    const movies = await this.repo.search(q);
    return MovieFactory.toMovieDTOList(movies);
  }

  async getMoviesByCategory(category: string): Promise<Movie[]> {
    const movies = await this.repo.findByCategory(category);
    return MovieFactory.toMovieDTOList(movies);
  }

  async getMovieById(id: string): Promise<Movie> {
    const movie = await this.repo.findById(id);
    if (!movie) {
      throw new NotFoundError(`Movie with id ${id} not found`);
    }
    return MovieFactory.toMovieDTO(movie);
  }

  async createMovie(data: CreateMovieDTO): Promise<Movie> {
    const movie = await this.repo.create(data);
    return MovieFactory.toMovieDTO(movie);
  }

  async updateMovie(id: string, data: UpdateMovieDTO): Promise<Movie> {
    const existing = await this.repo.findById(id);
    if (!existing) {
      throw new NotFoundError(`Movie with id ${id} not found`);
    }
    const movie = await this.repo.update(id, data);
    return MovieFactory.toMovieDTO(movie);
  }

  async deleteMovie(id: string): Promise<Movie> {
    const existing = await this.repo.findById(id);
    if (!existing) {
      throw new NotFoundError(`Movie with id ${id} not found`);
    }
    const movie = await this.repo.delete(id);
    return MovieFactory.toMovieDTO(movie);
  }

  async getUserFavorites(userId: string): Promise<string[]> {
    return this.repo.getFavorites(userId);
  }

  async addMovieToFavorites(userId: string, movieId: string): Promise<void> {
    const movie = await this.repo.findById(movieId);
    if (!movie) {
      throw new NotFoundError("Movie not found");
    }

    const isFav = await this.repo.checkFavorite(userId, movieId);
    if (!isFav) {
      await this.repo.addFavorite(userId, movieId);
    }
  }

  async removeMovieFromFavorites(userId: string, movieId: string): Promise<void> {
    await this.repo.removeFavorite(userId, movieId);
  }
}
