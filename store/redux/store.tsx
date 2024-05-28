import {configureStore} from '@reduxjs/toolkit';

import favoriteMovies from './favorites.tsx';

const store = configureStore({
  reducer: {
    favoriteMovies,
  },
});

export default store;
