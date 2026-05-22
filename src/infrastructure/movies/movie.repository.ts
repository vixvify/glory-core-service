import { prisma } from "../../lib/prisma";
import { Movie } from "../../core/types";
import { MovieRepository } from "../../modules/movies/domain/movie.repository";
import { CreateMovieDTO, UpdateMovieDTO } from "../../modules/movies/domain/movie.dto";

export class MovieRepositoryImpl implements MovieRepository {
  async findAll(): Promise<Movie[]> {
    return prisma.movie.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async search(q: string): Promise<Movie[]> {
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

  async findByCategory(category: string): Promise<Movie[]> {
    return prisma.movie.findMany({
      where: {
        category: { equals: category, mode: "insensitive" },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async findById(id: string): Promise<Movie | null> {
    return prisma.movie.findUnique({
      where: { id },
    });
  }

  async create(data: CreateMovieDTO): Promise<Movie> {
    return prisma.movie.create({
      data: {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        videoUrl: data.videoUrl || null,
        category: data.category,
        rating: Number(data.rating),
        releaseYear: Number(data.releaseYear),
        duration: Number(data.duration),
      },
    });
  }

  async update(id: string, data: UpdateMovieDTO): Promise<Movie> {
    return prisma.movie.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        videoUrl: data.videoUrl || null,
        category: data.category,
        rating: Number(data.rating),
        releaseYear: Number(data.releaseYear),
        duration: Number(data.duration),
      },
    });
  }

  async delete(id: string): Promise<Movie> {
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
