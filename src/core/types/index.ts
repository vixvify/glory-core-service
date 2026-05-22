export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  name: string | null;
  role: string;
  createdAt: Date | string;
  token?: string;
}

export interface RegisterUser {
  username: string;
  email: string;
  password?: string;
  name?: string;
}

export interface LoginUser {
  username?: string;
  email?: string;
  password?: string;
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string | null;
  category: string;
  rating: number;
  releaseYear: number;
  duration: number;
  createdAt: Date | string;
}

export interface CreateMovie {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  category: string;
  rating: number;
  releaseYear: number;
  duration: number;
}
