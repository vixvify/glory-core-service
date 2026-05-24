import { User } from "../../auth/domain/auth.dto";
import { Movie } from "./movie.dto";

export interface Rating {
  id: string;
  movieId: string;
  userId: string;
  stars: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  movie: Movie;
}
