import axios, { AxiosResponse } from "axios";
import Movie from "../model/movie.tsx";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.MOVIE_DB_API_KEY;

const axiosClient = axios.create({
  baseURL: BASE_URL
});

export type fetchMoviesProps = {
  category: string | null;
  page?: number | null;
  language?: string | null;
  query?: string | null;
};

async function fetchMovies(
  {
    category,
    page = 1,
    language = "en-us",
    query = ""
  }: fetchMoviesProps): Promise<Movie[]> {
  let url: string;
  switch (category) {
    case "popular":
      url = `/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`;
      break;
    case "top_rated":
      url = `/movie/top_rated?api_key=${API_KEY}&language=${language}&page=${page}`;
      break;
    case "upcoming":
      url = `/movie/upcoming?api_key=${API_KEY}&language=${language}&page=${page}`;
      break;
    case "now_playing":
      url = `/movie/now_playing?api_key=${API_KEY}&language=${language}&page=${page}`;
      break;
    case "search":
      url = `/search/movie?api_key=${API_KEY}&language=${language}&query=${query}&page=${page}`;
      break;
    default:
      url = `/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`;
  }

  const response: AxiosResponse<any, any> = await axiosClient.get(url);

  return response.data.results;
}

export type fetchMovieDetailsProps = {
  movieId: number;
  language?: string;
};

async function fetchMovieDetails(
  {
    movieId,
    language = "en-us"
  }: fetchMovieDetailsProps): Promise<Movie> {
  const url = `/movie/${movieId}?api_key=${API_KEY}&language=${language}`;
  const response: AxiosResponse<any, any> = await axiosClient.get(url);

  return response.data;
}

export { fetchMovies, fetchMovieDetails };
