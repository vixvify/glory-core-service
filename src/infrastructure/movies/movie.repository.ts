import { prisma } from "../../lib/prisma";
import { CreateMovieInput, UpdateMovieInput } from "../../modules/movies/domain/movie";
import { MovieRepository } from "../../modules/movies/domain/movie.repository";
import { Movie as PrismaMovie } from "@prisma/client";

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
}
