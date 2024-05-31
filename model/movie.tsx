import Genres from "./genres.tsx";

class Movie {
  id: number;
  title: string;
  adult: boolean;
  backdrop_path: string;
  genres: Genres[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  tagline: string;
  vote_average: number;
  vote_count: number;

  constructor(
    id: number,
    title: string,
    adult: boolean,
    backdrop_path: string,
    genres: Genres[],
    original_language: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    revenue: number,
    tagline: string,
    vote_average: number,
    vote_count: number
  ) {
    this.id = id;
    this.title = title;
    this.adult = adult;
    this.backdrop_path = backdrop_path;
    this.genres = genres;
    this.original_language = original_language;
    this.overview = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.release_date = release_date;
    this.revenue = revenue;
    this.tagline = tagline;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
  }
}

export default Movie;
