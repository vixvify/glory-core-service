import { Movie as DtoMovie } from "./domain/movie";
import { Movie as PrismaMovie } from "@prisma/client";

export class MovieFactory {

  static toDomain(movie: any): DtoMovie {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.description,
      category: movie.category,
      thumbnail: movie.thumbnail,
      youtubeUrl: movie.youtubeUrl || "",
      views: movie.views,
      ratings: movie.ratings
        ? movie.ratings.map((r: any) => ({
            ...r,
            user: r.user ? {
              ...r.user,
              name: r.user.name ?? "Unknown User",
            } : undefined
          }))
        : [],
      year: movie.year,
      matchRate: movie.matchRate,
      ageRating: movie.ageRating,
      duration: movie.duration,
      createdAt: movie.createdAt,
      updatedAt: movie.updatedAt,
    };
  }

  static toDomainList(movies: PrismaMovie[]): DtoMovie[] {
    return movies.map(MovieFactory.toDomain);
  }
}
