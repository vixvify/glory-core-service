import { prisma } from "../../lib/prisma";
import { CreateMovieDTO, UpdateMovieDTO } from "../../modules/movies/domain/movie.dto";
import { MovieRepository } from "../../modules/movies/domain/movie.repository";
import { Movie as PrismaMovie } from "@prisma/client";
import { Rating } from "../../modules/movies/domain/rating";

export class MovieRepositoryImpl implements MovieRepository {
  async findAll(): Promise<PrismaMovie[]> {
    return prisma.movie.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async search(q: string): Promise<PrismaMovie[]> {
    return prisma.movie.findMany({
      where: {
        OR: [
          { title: { contains: q, mode: "insensitive" } },
          { description: { contains: q, mode: "insensitive" } },
        ],
      },
      orderBy: { createdAt: "desc" },
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

  async create(data: Omit<CreateMovieDTO, "thumbnail"> & { thumbnail: string }): Promise<PrismaMovie> {
    return prisma.movie.create({
      data: {
        title: data.title,
        description: data.description,
        thumbnail: data.thumbnail,
        youtubeUrl: data.youtubeUrl,
        category: data.category,
        year: Number(data.year),
        duration: Number(data.duration),
        matchRate: Number(data.matchRate),
        ageRating: data.ageRating,
      },
    });
  }

  async update(id: string, data: Omit<UpdateMovieDTO, "thumbnail"> & { thumbnail: string }): Promise<PrismaMovie> {
    return prisma.movie.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        thumbnail: data.thumbnail,
        youtubeUrl: data.youtubeUrl,
        category: data.category,
        year: Number(data.year),
        matchRate: Number(data.matchRate),
        ageRating: data.ageRating,
        duration: Number(data.duration),
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
