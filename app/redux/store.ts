import { configureStore } from '@reduxjs/toolkit';
import { api } from '../components/CharacterList/CharacterListSlice'; 
import favoritosReducer from '@/app/components/Favoritos/FavoritosSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, 
    favoritos: favoritosReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Middleware do RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
