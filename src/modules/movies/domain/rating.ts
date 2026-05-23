export interface Rating {
  id: string;
  movieId: string;
  userId: string;
  stars: number;
  comment?: string;
}
