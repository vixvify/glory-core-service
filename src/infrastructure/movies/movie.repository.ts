import { prisma } from "../../lib/prisma";
import {
  CreateMovieBodyInput,
  UpdateMovieBodyInput,
} from "../../modules/movies/domain/movie";
import { MovieRepository } from "../../modules/movies/domain/movie.repository";
import { Movie as PrismaMovie } from "@prisma/client";
import {
  Rating,
  AddRatingBodyInput,
  GetRatingsQueryInput,
  UpdateRatingBodyInput,
} from "../../modules/movies/domain/rating";
import { NotFoundError } from "../../core/error";
import { isUuid } from "../../core/utils/validator";

export class MovieRepositoryImpl implements MovieRepository {

  async findAll(): Promise<PrismaMovie[]> {
    return prisma.movie.findMany({
      include: {
        crew: {
          include: {
            crewMember: true,
          },
        },
        bts: true,
        ratings: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
                name: true,
                role: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async search(q: string): Promise<PrismaMovie[]> {
    const terms = q.trim().split(/\s+/).filter(Boolean);
    if (terms.length === 0) {
      return prisma.movie.findMany({
        include: {
          crew: {
            include: {
              crewMember: true,
            },
          },
          bts: true,
        },
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
      include: {
        crew: {
          include: {
            crewMember: true,
          },
        },
        bts: true,
      },
    });
  }

  async findByCategory(category: string): Promise<PrismaMovie[]> {
    return prisma.movie.findMany({
      where: {
        category: { equals: category, mode: "insensitive" },
      },
      include: {
        crew: {
          include: {
            crewMember: true,
          },
        },
        bts: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async findByUniversity(university: string): Promise<PrismaMovie[]> {
    return prisma.movie.findMany({
      where: {
        university: { equals: university, mode: "insensitive" },
      },
      include: {
        crew: {
          include: {
            crewMember: true,
          },
        },
        bts: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async findById(id: string): Promise<PrismaMovie | null> {
    return prisma.movie.findUnique({
      where: { id },
      include: {
        crew: {
          include: {
            crewMember: true,
          },
        },
        bts: true,
        ratings: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
                name: true,
                role: true,
              },
            },
          },
        },
      },
    });
  }

  async create(
    data: Omit<CreateMovieBodyInput, "thumbnail" | "btsPhotos"> & {
      thumbnail: string;
      btsPhotos?: string;
    },
  ): Promise<PrismaMovie> {
    const directors = data.director ? (Array.isArray(data.director) ? data.director : [data.director]) : [];
    const producers = data.producer ? (Array.isArray(data.producer) ? data.producer : [data.producer]) : [];
    const writers = data.writer ? (Array.isArray(data.writer) ? data.writer : [data.writer]) : [];
    const cast = data.cast ? (Array.isArray(data.cast) ? data.cast : [data.cast]) : [];
    const btsVideo = data.btsVideo ? (Array.isArray(data.btsVideo) ? data.btsVideo : [data.btsVideo]) : [];
    const btsPhotos = data.btsPhotos ? data.btsPhotos.split(",").map(p => p.trim()).filter(Boolean) : [];

    const movie = await prisma.movie.create({
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
        university: data.university,
      },
    });

    const associateCrew = async (namesOrIds: string[], role: string, movieId: string) => {
      for (const item of namesOrIds) {
        if (!item) continue;
        
        let crewMemberId: string;
        if (isUuid(item)) {
          const crewMember = await prisma.crewMember.findUnique({
            where: { id: item },
          });
          if (!crewMember) {
            throw new NotFoundError(`Crew member with ID ${item} not found`);
          }
          crewMemberId = crewMember.id;
        } else {
          const crewMember = await prisma.crewMember.upsert({
            where: { name: item },
            update: {},
            create: { name: item },
          });
          crewMemberId = crewMember.id;
        }

        await prisma.movieCrew.create({
          data: {
            movieId,
            crewMemberId,
            role,
          },
        });
      }
    };

    await associateCrew(directors, "DIRECTOR", movie.id);
    await associateCrew(producers, "PRODUCER", movie.id);
    await associateCrew(writers, "WRITER", movie.id);
    await associateCrew(cast, "CAST", movie.id);

    await prisma.movieBts.create({
      data: {
        movieId: movie.id,
        btsVideo,
        btsPhotos,
      },
    });

    const result = await this.findById(movie.id);
    if (!result) {
      throw new Error("Failed to retrieve created movie");
    }
    return result;
  }

  async update(
    id: string,
    data: Omit<UpdateMovieBodyInput, "thumbnail" | "btsPhotos"> & {
      thumbnail: string;
      btsPhotos?: string;
    },
  ): Promise<PrismaMovie> {
    const directors = data.director ? (Array.isArray(data.director) ? data.director : [data.director]) : [];
    const producers = data.producer ? (Array.isArray(data.producer) ? data.producer : [data.producer]) : [];
    const writers = data.writer ? (Array.isArray(data.writer) ? data.writer : [data.writer]) : [];
    const cast = data.cast ? (Array.isArray(data.cast) ? data.cast : [data.cast]) : [];
    const btsVideo = data.btsVideo ? (Array.isArray(data.btsVideo) ? data.btsVideo : [data.btsVideo]) : [];
    const btsPhotos = data.btsPhotos ? data.btsPhotos.split(",").map(p => p.trim()).filter(Boolean) : [];

    await prisma.movie.update({
      where: { id },
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
        university: data.university,
      },
    });

    await prisma.movieCrew.deleteMany({
      where: { movieId: id },
    });

    const associateCrew = async (namesOrIds: string[], role: string, movieId: string) => {
      for (const item of namesOrIds) {
        if (!item) continue;
        
        let crewMemberId: string;
        if (isUuid(item)) {
          const crewMember = await prisma.crewMember.findUnique({
            where: { id: item },
          });
          if (!crewMember) {
            throw new NotFoundError(`Crew member with ID ${item} not found`);
          }
          crewMemberId = crewMember.id;
        } else {
          const crewMember = await prisma.crewMember.upsert({
            where: { name: item },
            update: {},
            create: { name: item },
          });
          crewMemberId = crewMember.id;
        }

        await prisma.movieCrew.create({
          data: {
            movieId,
            crewMemberId,
            role,
          },
        });
      }
    };

    await associateCrew(directors, "DIRECTOR", id);
    await associateCrew(producers, "PRODUCER", id);
    await associateCrew(writers, "WRITER", id);
    await associateCrew(cast, "CAST", id);

    await prisma.movieBts.upsert({
      where: { movieId: id },
      create: {
        movieId: id,
        btsVideo,
        btsPhotos,
      },
      update: {
        btsVideo,
        btsPhotos,
      },
    });

    const result = await this.findById(id);
    if (!result) {
      throw new Error("Failed to retrieve updated movie");
    }
    return result;
  }

  async delete(id: string): Promise<PrismaMovie> {
    return prisma.movie.delete({
      where: { id },
    });
  }

  async getFavorites(userId: string): Promise<PrismaMovie[]> {
    const favorites = await prisma.favorite.findMany({
      where: { userId },
      include: {
        movie: {
          include: {
            crew: {
              include: {
                crewMember: true,
              },
            },
            bts: true,
            ratings: {
              include: {
                user: {
                  select: {
                    id: true,
                    email: true,
                    name: true,
                    role: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return favorites.map((fav) => fav.movie);
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
  async addRating(data: AddRatingBodyInput): Promise<void> {
    await prisma.rating.create({
      data: {
        userId: data.userId,
        movieId: data.movieId,
        stars: data.stars,
      },
    });
  }
  async getRatingsByUserIdAndMovieId(
    data: GetRatingsQueryInput,
  ): Promise<Rating[]> {
    const ratings = await prisma.rating.findMany({
      where: { userId: data.userId, movieId: data.movieId },
      include: {
        movie: true,
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
          },
        },
      },
    });

    return ratings.map((rating) => ({
      ...rating,
      user: {
        ...rating.user,
        name: rating.user.name ?? "Unknown User",
        role: rating.user.role as "user" | "admin",
      },
      movie: {
        ...rating.movie,
        crew: [],
        bts: null,
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
  async updateRating(data: UpdateRatingBodyInput): Promise<void> {
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
