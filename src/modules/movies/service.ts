import { AppError, NotFoundError, BadRequestError } from "../../core/error";
import {
  Movie,
  CreateMovieInput,
  UpdateMovieInput,
  CATEGORIES,
  AGE_RATINGS,
} from "./domain/movie";
import { MovieRepository } from "./domain/movie.repository";
import { MovieFactory } from "./factory";
import { uploadToSupabase } from "../../lib/supabase";
import {
  RatingInput,
  Rating,
  RatingUserIdAndMovieIdInput,
} from "./domain/rating";

export class MovieService {
  constructor(private repo: MovieRepository) {}

  async getAllMovies(): Promise<Movie[]> {
    try {
      const movies = await this.repo.findAll();
      return MovieFactory.toDomainList(movies);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to get movies";
      throw new BadRequestError(message, error);
    }
  }

  async searchMovies(q: string): Promise<Movie[]> {
    try {
      const movies = await this.repo.search(q);
      return MovieFactory.toDomainList(movies);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to search movies";
      throw new BadRequestError(message, error);
    }
  }

  async getMoviesByCategory(category: string): Promise<Movie[]> {
    try {
      const movies = await this.repo.findByCategory(category);
      return MovieFactory.toDomainList(movies);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error
          ? error.message
          : "Failed to get movies by category";
      throw new BadRequestError(message, error);
    }
  }

  async getMovieById(id: string): Promise<Movie> {
    try {
      const movie = await this.repo.findById(id);
      if (!movie) {
        throw new NotFoundError(`Movie with id ${id} not found`);
      }
      return MovieFactory.toDomain(movie);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to get movie";
      throw new BadRequestError(message, error);
    }
  }

  async createMovie(data: CreateMovieInput): Promise<Movie> {
    try {
      let thumbnailUrl = "";
      if (data.thumbnail instanceof File) {
        thumbnailUrl = await uploadToSupabase(data.thumbnail);
      } else {
        thumbnailUrl = data.thumbnail;
      }
      const movie = await this.repo.create({
        ...data,
        thumbnail: thumbnailUrl,
      });
      return MovieFactory.toDomain(movie);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to create movie";
      throw new BadRequestError(message, error);
    }
  }

  async updateMovie(id: string, data: UpdateMovieInput): Promise<Movie> {
    try {
      const existing = await this.repo.findById(id);
      if (!existing) {
        throw new NotFoundError(`Movie with id ${id} not found`);
      }

      let thumbnailUrl = existing.thumbnail;
      if (data.thumbnail instanceof File) {
        thumbnailUrl = await uploadToSupabase(data.thumbnail);
      } else if (typeof data.thumbnail === "string") {
        thumbnailUrl = data.thumbnail;
      }

      const movie = await this.repo.update(id, {
        ...data,
        thumbnail: thumbnailUrl,
      });
      return MovieFactory.toDomain(movie);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to update movie";
      throw new BadRequestError(message, error);
    }
  }

  async deleteMovie(id: string): Promise<Movie> {
    try {
      const existing = await this.repo.findById(id);
      if (!existing) {
        throw new NotFoundError(`Movie with id ${id} not found`);
      }
      const movie = await this.repo.delete(id);
      return MovieFactory.toDomain(movie);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to delete movie";
      throw new BadRequestError(message, error);
    }
  }

  async getUserFavorites(userId: string): Promise<string[]> {
    try {
      return await this.repo.getFavorites(userId);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to get user favorites";
      throw new BadRequestError(message, error);
    }
  }

  async addMovieToFavorites(userId: string, movieId: string): Promise<void> {
    try {
      const movie = await this.repo.findById(movieId);
      if (!movie) {
        throw new NotFoundError("Movie not found");
      }

      const isFav = await this.repo.checkFavorite(userId, movieId);
      if (!isFav) {
        await this.repo.addFavorite(userId, movieId);
      }
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error
          ? error.message
          : "Failed to add movie to favorites";
      throw new BadRequestError(message, error);
    }
  }

  async removeMovieFromFavorites(
    userId: string,
    movieId: string,
  ): Promise<void> {
    try {
      await this.repo.removeFavorite(userId, movieId);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error
          ? error.message
          : "Failed to remove movie from favorites";
      throw new BadRequestError(message, error);
    }
  }

  async getCategories(): Promise<readonly string[]> {
    return CATEGORIES;
  }

  async getAgeRatings(): Promise<readonly string[]> {
    return AGE_RATINGS;
  }

  async addRating(data: RatingInput): Promise<void> {
    try {
      return await this.repo.addRating(data);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to add rating";
      throw new BadRequestError(message, error);
    }
  }

  async getRatingsByUserIdAndMovieId(
    data: RatingUserIdAndMovieIdInput,
  ): Promise<Rating[]> {
    try {
      return await this.repo.getRatingsByUserIdAndMovieId(data);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to get ratings";
      throw new BadRequestError(message, error);
    }
  }

  async deleteRating(userId: string, movieId: string): Promise<void> {
    try {
      await this.repo.deleteRating(userId, movieId);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to delete rating";
      throw new BadRequestError(message, error);
    }
  }

  async checkRating(userId: string, movieId: string): Promise<boolean> {
    try {
      return await this.repo.checkRating(userId, movieId);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to check rating";
      throw new BadRequestError(message, error);
    }
  }

  async updateRating(data: RatingInput): Promise<void> {
    try {
      return await this.repo.updateRating(data);
    } catch (error: unknown) {
      if (error instanceof AppError) throw error;
      const message =
        error instanceof Error ? error.message : "Failed to update rating";
      throw new BadRequestError(message, error);
    }
  }
}
