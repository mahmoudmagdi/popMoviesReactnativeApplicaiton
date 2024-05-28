import axios, {AxiosResponse} from 'axios';
import Movie from '../model/movie.tsx';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e6fa82941c0636c71720fceec76bc5d3';

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

async function fetchPopularMovies(
  page: number = 1,
  language: string = 'en-us',
): Promise<Movie[]> {
  const response = await axiosClient.get(
    `/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`,
  );

  const movies: Movie[] = [];

  for (const movie of response.data.results) {
    movies.push(
      new Movie(
        movie.id,
        movie.title,
        movie.adult,
        movie.backdrop_path,
        movie.genres,
        movie.original_language,
        movie.overview,
        movie.popularity,
        movie.poster_path,
        movie.release_date,
        movie.revenue,
        movie.tagline,
        movie.vote_average,
        movie.vote_count,
      ),
    );
  }

  return movies;
}

function getTopRatedMovies(
  page: number,
  language: string = 'en-us',
): Promise<AxiosResponse<Movie[]>> {
  return axiosClient.get(
    `/movie/top_rated?api_key=${API_KEY}&language=${language}&page=${page}`,
  );
}

function getUpcomingMovies(
  page: number,
  language: string = 'en-us',
): Promise<AxiosResponse<Movie[]>> {
  return axiosClient.get(
    `/movie/upcoming?api_key=${API_KEY}&language=${language}&page=${page}`,
  );
}

function getNowPlayingMovies(
  page: number,
  language: string = 'en-us',
): Promise<AxiosResponse<Movie[]>> {
  return axiosClient.get(
    `/movie/now_playing?api_key=${API_KEY}&language=${language}&page=${page}`,
  );
}

function getMovieDetail(
  movieId: number,
  language: string = 'en-us',
): Promise<AxiosResponse<Movie>> {
  return axiosClient.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=${language}`,
  );
}

function searchMovies(
  query: string,
  page: number,
  language: string = 'en-us',
): Promise<AxiosResponse<Movie[]>> {
  return axiosClient.get(
    `/search/movie?api_key=${API_KEY}&language=${language}&query=${query}&page=${page}`,
  );
}

export {
  fetchPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
  getMovieDetail,
  searchMovies,
};
