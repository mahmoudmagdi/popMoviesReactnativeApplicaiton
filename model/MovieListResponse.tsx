import Movie from "./movie.tsx";

class MovieListResponse {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;

  constructor(
    page: number,
    results: Movie[],
    total_results: number,
    total_pages: number
  ) {
    this.page = page;
    this.results = results;
    this.total_results = total_results;
    this.total_pages = total_pages;
  }
}

export default MovieListResponse;
