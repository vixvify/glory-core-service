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
} from "./domain/movie";
import {
  ratingInputSchema,
  deleteRatingSchema,
  checkRatingSchema,
} from "./domain/rating";

const repo = new MovieRepositoryImpl();
const service = new MovieService(repo);

export const movieRouter = new Elysia({ prefix: "/movie" })
  .use(authMiddleware)
  .get("/all", async () => {
    const movies = await service.getAllMovies();
    return formatSuccess(movies);
  })
  .get("/categories-data", async () => {
    const categories = await service.getCategories();
    return formatSuccess(categories);
  })
  .get("/ratings-data", async () => {
    const ratings = await service.getAgeRatings();
    return formatSuccess(ratings);
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
    },
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
    },
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
    },
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
    },
  )
  .get("/:id", async ({ params }) => {
    const { id } = params;
    const movie = await service.getMovieById(id);
    return formatSuccess(movie);
  })
  .post(
    "/",
    async ({ body }) => {
      const payload = {
        ...body,
        year: Number(body.year),
        duration: Number(body.duration),
        matchRate: Number(body.matchRate),
      };
      const movie = await service.createMovie(payload);
      return formatSuccess(movie, "Movie created successfully");
    },
    {
      body: createMovieSchema,
      requireAuth: true,
      requireRole: "admin",
    },
  )
  .put(
    "/:id",
    async ({ params, body }) => {
      const { id } = params;
      const payload = {
        ...body,
        year: Number(body.year),
        duration: Number(body.duration),
        matchRate: Number(body.matchRate),
      };
      const movie = await service.updateMovie(id, payload);
      return formatSuccess(movie, "Movie updated successfully");
    },
    {
      body: updateMovieSchema,
      requireAuth: true,
      requireRole: "admin",
    },
  )
  .delete(
    "/:id",
    async ({ params }) => {
      const { id } = params;
      const movie = await service.deleteMovie(id);
      return formatSuccess(movie, "Movie deleted successfully");
    },
    {
      requireAuth: true,
      requireRole: "admin",
    },
  )
  .post(
    "/ratings",
    async ({ body }) => {
      await service.addRating(body);
      return formatSuccess(null, "Rating added successfully");
    },
    {
      body: ratingInputSchema,
      requireAuth: true,
    },
  )
  .get(
    "/ratings",
    async ({ body }) => {
      const ratings = await service.getRatingsByUserIdAndMovieId(body);
      return formatSuccess(ratings);
    },
    {
      body: checkRatingSchema,
      requireAuth: true,
    },
  )
  .delete(
    "/ratings",
    async ({ body }) => {
      await service.deleteRating(body.userId, body.movieId);
      return formatSuccess(null, "Rating deleted successfully");
    },
    {
      body: deleteRatingSchema,
      requireAuth: true,
    },
  )
  .get(
    "/ratings/check",
    async ({ body }) => {
      const { userId, movieId } = body;
      const rating = await service.checkRating(userId, movieId);
      return formatSuccess(rating);
    },
    {
      body: checkRatingSchema,
      requireAuth: true,
    },
  )
  .put(
    "/ratings",
    async ({ body }) => {
      await service.updateRating(body);
      return formatSuccess(null, "Rating updated successfully");
    },
    {
      body: ratingInputSchema,
      requireAuth: true,
    },
  );
