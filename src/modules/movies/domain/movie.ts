import { t, Static } from "elysia";
import { Rating } from "./rating";
import { User } from "../../auth/domain/auth";

export interface MovieCrew {
    id: string;
    movieId: string;
    director?: string | null;
    producer?: string | null;
    writer?: string | null;
    cast: string[];
    btsVideo?: string | null;
    btsPhotos: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Movie {
    id: string;
    title: string;
    description: string;
    category: string;
    thumbnail: string;
    youtubeUrl: string;
    views: number;
    ratings: Rating[];
    year: number;
    matchRate: number;
    ageRating: string;
    duration: number;
    university?: string | null;
    crew?: MovieCrew | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface FavoriteMovie {
    id: string;
    userId: string;
    movieId: string;
    user: User;
    movie: Movie;
    createdAt: Date;
}


export const createMovieBodySchema = t.Object({
    title: t.String(),
    description: t.String(),
    category: t.String(),
    thumbnail: t.File(),
    youtubeUrl: t.String(),
    year: t.Numeric(),
    duration: t.Numeric(),
    matchRate: t.Numeric(),
    ageRating: t.String(),
    university: t.Optional(t.String()),
    director: t.Optional(t.String()),
    producer: t.Optional(t.String()),
    writer: t.Optional(t.String()),
    cast: t.Optional(t.String()),
    btsVideo: t.Optional(t.String()),
    btsPhotos: t.Optional(
        t.Union([
            t.File(),
            t.Array(t.File()),
            t.String(),
            t.Array(t.String()),
        ])
    ),
});
export type CreateMovieBodyInput = Static<typeof createMovieBodySchema>;

export const updateMovieParamsSchema = t.Object({
    id: t.String({ format: "uuid" }),
});
export type UpdateMovieParamsInput = Static<typeof updateMovieParamsSchema>;

export const updateMovieBodySchema = t.Object({
    title: t.String(),
    description: t.String(),
    category: t.String(),
    thumbnail: t.Union([t.File(), t.String()]),
    youtubeUrl: t.String(),
    year: t.Numeric(),
    duration: t.Numeric(),
    matchRate: t.Numeric(),
    ageRating: t.String(),
    university: t.Optional(t.String()),
    director: t.Optional(t.String()),
    producer: t.Optional(t.String()),
    writer: t.Optional(t.String()),
    cast: t.Optional(t.String()),
    btsVideo: t.Optional(t.String()),
    btsPhotos: t.Optional(
        t.Union([
            t.File(),
            t.Array(t.File()),
            t.String(),
            t.Array(t.String()),
        ])
    ),
});
export type UpdateMovieBodyInput = Static<typeof updateMovieBodySchema>;

export const getMovieByIdParamsSchema = t.Object({
    id: t.String({ format: "uuid" }),
});
export type GetMovieByIdParamsInput = Static<typeof getMovieByIdParamsSchema>;

export const getMoviesByCategoryParamsSchema = t.Object({
    category: t.String(),
});
export type GetMoviesByCategoryParamsInput = Static<typeof getMoviesByCategoryParamsSchema>;

export const getMoviesByUniversityParamsSchema = t.Object({
    university: t.String(),
});
export type GetMoviesByUniversityParamsInput = Static<typeof getMoviesByUniversityParamsSchema>;

export const deleteMovieParamsSchema = t.Object({
    id: t.String({ format: "uuid" }),
});
export type DeleteMovieParamsInput = Static<typeof deleteMovieParamsSchema>;

export const searchMoviesQuerySchema = t.Object({
    q: t.Optional(t.String()),
});
export type SearchMoviesQueryInput = Static<typeof searchMoviesQuerySchema>;

export const addFavoriteBodySchema = t.Object({
    movieId: t.String(),
});
export type AddFavoriteBodyInput = Static<typeof addFavoriteBodySchema>;

export const removeFavoriteParamsSchema = t.Object({
    movieId: t.String({ format: "uuid" }),
});
export type RemoveFavoriteParamsInput = Static<typeof removeFavoriteParamsSchema>;

export const CATEGORIES = [
    "Action",
    "Sci-Fi",
    "Horror",
    "Comedy",
    "Thriller",
    "Drama",
    "Romance",
    "Adventure",
    "Fantasy",
    "Animation",
    "Biography",
    "Documentary",
    "Family",
    "Music",
    "Mystery",
    "Sport",
    "Western"
] as const;

export const AGE_RATINGS = [
    "G",
    "PG",
    "PG-13",
    "NC-17",
    "R"
] as const;

export const UNIVERSITIES = [
    "จุฬาลงกรณ์มหาวิทยาลัย",
    "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
    "มหาวิทยาลัยกรุงเทพ"
] as const;

