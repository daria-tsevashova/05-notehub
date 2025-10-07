import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Movie } from "../types/movie";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export interface FetchMoviesResponse {
  results: Movie[];
  total_pages: number;
}

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export async function fetchMovies(
  query: string,
  page: number
): Promise<FetchMoviesResponse> {
  const response: AxiosResponse<FetchMoviesResponse> = await apiClient.get(
    "/search/movie",
    {
      params: {
        query,
        page,
      },
    }
  );
  return response.data;
}
