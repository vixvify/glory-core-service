import { Movie } from "../../core/types";

export class MovieFactory {
  static toMovieDTO(movie: Movie): Movie {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.description,
      imageUrl: movie.imageUrl,
      videoUrl: movie.videoUrl,
      category: movie.category,
      rating: movie.rating,
      releaseYear: movie.releaseYear,
      duration: movie.duration,
      createdAt: movie.createdAt,
    };
  }

  static toMovieDTOList(movies: Movie[]): Movie[] {
    return movies.map(MovieFactory.toMovieDTO);
  }
}
