import { prisma } from "../../lib/prisma";
import { CreateMovieInput, UpdateMovieInput } from "../../modules/movies/domain/movie";
import { MovieRepository } from "../../modules/movies/domain/movie.repository";
import { Movie as PrismaMovie } from "@prisma/client";
import { Rating, RatingInput } from "../../modules/movies/domain/rating";

export class MovieRepositoryImpl implements MovieRepository {
  async findAll(): Promise<PrismaMovie[]> {
    return prisma.movie.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async search(q: string): Promise<PrismaMovie[]> {
    const terms = q.trim().split(/\s+/).filter(Boolean);
    if (terms.length === 0) {
      return prisma.movie.findMany({
        orderBy: { createdAt: "desc" },
      });
    }

    return prisma.movie.findMany({
      where: {
        title: {
          contains: q,
          mode: "insensitive",
        },
      },
    });
  }

  async findByCategory(category: string): Promise<PrismaMovie[]> {
    return prisma.movie.findMany({
      where: {
        category: { equals: category, mode: "insensitive" },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async findById(id: string): Promise<PrismaMovie | null> {
    return prisma.movie.findUnique({
      where: { id },
    });
  }

  async create(data: Omit<CreateMovieInput, "thumbnail"> & { thumbnail: string }): Promise<PrismaMovie> {
    return prisma.movie.create({
      data: {
        title: data.title,
        description: data.description,
        thumbnail: data.thumbnail,
        youtubeUrl: data.youtubeUrl,
        category: data.category,
        year: data.year,
        duration: data.duration,
        matchRate: data.matchRate,
        ageRating: data.ageRating,
      },
    });
  }

  async update(id: string, data: Omit<UpdateMovieInput, "thumbnail"> & { thumbnail: string }): Promise<PrismaMovie> {
    return prisma.movie.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        thumbnail: data.thumbnail,
        youtubeUrl: data.youtubeUrl,
        category: data.category,
        year: data.year,
        matchRate: data.matchRate,
        ageRating: data.ageRating,
        duration: data.duration,
      },
    });
  }

  async delete(id: string): Promise<PrismaMovie> {
    return prisma.movie.delete({
      where: { id },
    });
  }

  async getFavorites(userId: string): Promise<string[]> {
    const favorites = await prisma.favorite.findMany({
      where: { userId },
      select: { movieId: true },
    });
    return favorites.map((fav) => fav.movieId);
  }

  async checkFavorite(userId: string, movieId: string): Promise<boolean> {
    const existing = await prisma.favorite.findUnique({
      where: {
        userId_movieId: {
          userId,
          movieId,
        },
      },
    });
    return !!existing;
  }

  async addFavorite(userId: string, movieId: string): Promise<void> {
    await prisma.favorite.create({
      data: {
        userId,
        movieId,
      },
    });
  }

  async removeFavorite(userId: string, movieId: string): Promise<void> {
    await prisma.favorite.deleteMany({
      where: {
        userId,
        movieId,
      },
    });
  }
  async addRating(data: RatingInput): Promise<void> {
    await prisma.rating.create({
      data: {
        userId: data.userId,
        movieId: data.movieId,
        stars: data.stars,
      },
    });
  }
  async getRatingsByUserId(userId: string): Promise<Rating[]> {
    const ratings = await prisma.rating.findMany({
      where: { userId },
      include: { movie: true, user: true },
    });

    return ratings.map((rating) => ({
      ...rating,
      user: {
        ...rating.user,
        name: rating.user.name ?? "Unknown User",
        role: rating.user.role as "user" | "admin",
      },
    }));
  }
  async getRatingByMovieId(movieId: string): Promise<Rating[]> {
    const ratings = await prisma.rating.findMany({
      where: { movieId },
      include: { movie: true, user: true },
    });

    return ratings.map((rating) => ({
      ...rating,
      user: {
        ...rating.user,
        name: rating.user.name ?? "Unknown User",
        role: rating.user.role as "user" | "admin",
      },
    }));
  }
  async deleteRating(userId: string, movieId: string): Promise<void> {
    await prisma.rating.deleteMany({
      where: {
        userId,
        movieId,
      },
    });
  }
  async checkRating(userId: string, movieId: string): Promise<boolean> {
    const existing = await prisma.rating.findUnique({
      where: {
        userId_movieId: {
          userId,
          movieId,
        },
      },
    });
    return !!existing;
  }
  async updateRating(data: RatingInput): Promise<void> {
    await prisma.rating.update({
      where: {
        userId_movieId: {
          userId: data.userId,
          movieId: data.movieId,
        },
      },
      data: {
        stars: data.stars,
      },
    });
  }
}
