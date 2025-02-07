import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritosState {
  favoritos: any[];
}

const initialState: FavoritosState = {
  favoritos: [],
};

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    addFavorito: (state, action: PayloadAction<any>) => {
      state.favoritos.push(action.payload);
    },
    removeFavorito: (state, action: PayloadAction<number>) => {
      state.favoritos = state.favoritos.filter((fav) => fav.id !== action.payload);
    },
  },
});

export const { addFavorito, removeFavorito } = favoritosSlice.actions;
export default favoritosSlice.reducer;
