import {createSlice} from '@reduxjs/toolkit';
import Movie from '../../model/movie.tsx';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteMovies: [] as Movie[],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteMovies.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteMovies.splice(
        state.favoriteMovies.indexOf(action.payload),
        1,
      );
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
