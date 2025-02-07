import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Character {
  id: number,
  name: string, 
  status: string,
  species: string,
  type: string,
  gender : string,
  origin: string,
  location: string,
  image: string,
  episode: string[],
  url: string,
  created: string
}

interface FavoritosState {
  favoritos: Character[];
}

const initialState: FavoritosState = {
  favoritos: [],
};

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    addFavorito: (state, action: PayloadAction<Character>) => {
      state.favoritos.push(action.payload);
    },
    removeFavorito: (state, action: PayloadAction<number>) => {
      state.favoritos = state.favoritos.filter((fav) => fav.id !== action.payload);
    },
  },
});

export const { addFavorito, removeFavorito } = favoritosSlice.actions;
export default favoritosSlice.reducer;
