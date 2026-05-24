import { NotFoundError } from "../../core/error";
import { Movie, CreateMovieDTO, UpdateMovieDTO } from "./domain/movie.dto";
import { MovieRepository } from "./domain/movie.repository";
import { MovieFactory } from "./factory";
import { uploadToR2 } from "../../lib/r2";

export class MovieService {
  constructor(private repo: MovieRepository) { }

  async getAllMovies(): Promise<Movie[]> {
    const movies = await this.repo.findAll();
    return MovieFactory.toDomainList(movies);
  }

  async searchMovies(q: string): Promise<Movie[]> {
    const movies = await this.repo.search(q);
    return MovieFactory.toDomainList(movies);
  }

  async getMoviesByCategory(category: string): Promise<Movie[]> {
    const movies = await this.repo.findByCategory(category);
    return MovieFactory.toDomainList(movies);
  }

  async getMovieById(id: string): Promise<Movie> {
    const movie = await this.repo.findById(id);
    if (!movie) {
      throw new NotFoundError(`Movie with id ${id} not found`);
    }
    return MovieFactory.toDomain(movie);
  }

  async createMovie(data: CreateMovieDTO): Promise<Movie> {
    const thumbnailUrl = await uploadToR2(data.thumbnail);

    const movie = await this.repo.create({
      ...data,
      thumbnail: thumbnailUrl,
    });
    return MovieFactory.toDomain(movie);
  }

  async updateMovie(id: string, data: UpdateMovieDTO): Promise<Movie> {
    const existing = await this.repo.findById(id);
    if (!existing) {
      throw new NotFoundError(`Movie with id ${id} not found`);
    }

    let thumbnailUrl = existing.thumbnail;
    if (data.thumbnail instanceof File) {
      thumbnailUrl = await uploadToR2(data.thumbnail);
    } else if (typeof data.thumbnail === "string") {
      thumbnailUrl = data.thumbnail;
    }

    const movie = await this.repo.update(id, {
      ...data,
      thumbnail: thumbnailUrl,
    });
    return MovieFactory.toDomain(movie);
  }

  async deleteMovie(id: string): Promise<Movie> {
    const existing = await this.repo.findById(id);
    if (!existing) {
      throw new NotFoundError(`Movie with id ${id} not found`);
    }
    const movie = await this.repo.delete(id);
    return MovieFactory.toDomain(movie);
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
