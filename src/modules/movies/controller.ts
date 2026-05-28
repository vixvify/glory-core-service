import { Elysia } from "elysia";
import { authMiddleware } from "../../middleware/auth";
import { MovieRepositoryImpl } from "../../infrastructure/movies/movie.repository";
import { MovieService } from "./service";
import { formatSuccess } from "../../core/interceptor";
import {
  createMovieBodySchema,
  updateMovieParamsSchema,
  updateMovieBodySchema,
  getMovieByIdParamsSchema,
  getMoviesByCategoryParamsSchema,
  getMoviesByUniversityParamsSchema,
  deleteMovieParamsSchema,
  searchMoviesQuerySchema,
  addFavoriteBodySchema,
  removeFavoriteParamsSchema,
} from "./domain/movie";
import {
  addRatingBodySchema,
  getRatingsQuerySchema,
  deleteRatingBodySchema,
  checkRatingQuerySchema,
  updateRatingBodySchema,
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
  .get("/universities-data", async () => {
    const universities = await service.getUniversities();
    return formatSuccess(universities);
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
      query: searchMoviesQuerySchema,
    },
  )
  .get(
    "/category/:category",
    async ({ params }) => {
      const { category } = params;
      const movies = await service.getMoviesByCategory(category);
      return formatSuccess(movies);
    },
    {
      params: getMoviesByCategoryParamsSchema,
    }
  )
  .get(
    "/university/:university",
    async ({ params }) => {
      const { university } = params;
      const movies = await service.getMoviesByUniversity(university);
      return formatSuccess(movies);
    },
    {
      params: getMoviesByUniversityParamsSchema,
    }
  )
  .get(
    "/favorites",
    async ({ user }) => {
      const favoriteMovies = await service.getUserFavorites(user!.id);
      return formatSuccess(favoriteMovies);
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
      body: addFavoriteBodySchema,
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
      params: removeFavoriteParamsSchema,
    }
  )
  .get(
    "/:id",
    async ({ params }) => {
      const { id } = params;
      const movie = await service.getMovieById(id);
      return formatSuccess(movie);
    },
    {
      params: getMovieByIdParamsSchema,
    }
  )
  .post(
    "/",
    async ({ body }) => {
      const movie = await service.createMovie(body);
      return formatSuccess(movie, "Movie created successfully");
    },
    {
      body: createMovieBodySchema,
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
      params: updateMovieParamsSchema,
      body: updateMovieBodySchema,
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
      params: deleteMovieParamsSchema,
      requireAuth: true,
      requireRole: "admin",
    }
  )
  .post(
    "/ratings",
    async ({ body }) => {
      await service.addRating(body);
      return formatSuccess(null, "Rating added successfully");
    },
    {
      body: addRatingBodySchema,
      requireAuth: true,
    },
  )
  .get(
    "/ratings",
    async ({ query }) => {
      const ratings = await service.getRatingsByUserIdAndMovieId(query);
      return formatSuccess(ratings);
    },
    {
      query: getRatingsQuerySchema,
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
      body: deleteRatingBodySchema,
      requireAuth: true,
    },
  )
  .get(
    "/ratings/check",
    async ({ query }) => {
      const { userId, movieId } = query;
      const rating = await service.checkRating(userId, movieId);
      return formatSuccess(rating);
    },
    {
      query: checkRatingQuerySchema,
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
      body: updateRatingBodySchema,
      requireAuth: true,
    },
  )