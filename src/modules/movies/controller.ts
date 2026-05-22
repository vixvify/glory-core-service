import { Elysia } from "elysia";
import { authMiddleware } from "../../middleware/auth";
import { MovieRepositoryImpl } from "../../infrastructure/movies/movie.repository";
import { MovieService } from "./service";
import { formatSuccess } from "../../core/interceptor";
import {
  createMovieSchema,
  updateMovieSchema,
  searchMovieSchema,
  favoriteSchema,
} from "./domain/movie.dto";

const repo = new MovieRepositoryImpl();
const service = new MovieService(repo);

export const movieRouter = new Elysia({ prefix: "/movie" })
  .use(authMiddleware)
  .get("/all", async () => {
    const movies = await service.getAllMovies();
    return formatSuccess(movies);
  })
  .get(
    "/search",
    async ({ query }) => {
      const q = query.q || "";
      const movies = await service.searchMovies(q);
      return formatSuccess(movies);
    },
    {
      query: searchMovieSchema,
    }
  )
  .get("/category/:category", async ({ params }) => {
    const { category } = params;
    const movies = await service.getMoviesByCategory(category);
    return formatSuccess(movies);
  })
  .get(
    "/favorites",
    async ({ user }) => {
      const favoriteMovieIds = await service.getUserFavorites(user!.id);
      return formatSuccess(favoriteMovieIds);
    },
    {
      requireAuth: true,
    }
  )
  .post(
    "/favorites",
    async ({ user, body }) => {
      const { movieId } = body;
      await service.addMovieToFavorites(user!.id, movieId);
      return formatSuccess(null, "Movie added to favorites");
    },
    {
      requireAuth: true,
      body: favoriteSchema,
    }
  )
  .delete(
    "/favorites/:movieId",
    async ({ user, params }) => {
      const { movieId } = params;
      await service.removeMovieFromFavorites(user!.id, movieId);
      return formatSuccess(null, "Movie removed from favorites");
    },
    {
      requireAuth: true,
    }
  )
  .get("/:id", async ({ params }) => {
    const { id } = params;
    const movie = await service.getMovieById(id);
    return formatSuccess(movie);
  })
  .post(
    "/",
    async ({ body }) => {
      const movie = await service.createMovie(body);
      return formatSuccess(movie, "Movie created successfully");
    },
    {
      body: createMovieSchema,
    }
  )
  .put(
    "/:id",
    async ({ params, body }) => {
      const { id } = params;
      const movie = await service.updateMovie(id, body);
      return formatSuccess(movie, "Movie updated successfully");
    },
    {
      body: updateMovieSchema,
    }
  )
  .delete("/:id", async ({ params }) => {
    const { id } = params;
    const movie = await service.deleteMovie(id);
    return formatSuccess(movie, "Movie deleted successfully");
  });
