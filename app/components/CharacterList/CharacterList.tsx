"use client";

import { useDispatch, useSelector } from "react-redux";
import { useGetCharactersQuery } from "./CharacterListSlice";
import { RootState, AppDispatch } from "../../redux/store";
import {
  addFavorito,
  removeFavorito,
} from "@/app/components/Favoritos/FavoritosSlice";
import Image from "next/image";

export default function CharacterList() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, error, isLoading } = useGetCharactersQuery();
  const favoritos = useSelector(
    (state: RootState) => state.favoritos.favoritos
  );

  if (isLoading) return <p className="text-center text-xl">Carregando...</p>;
  if (error)
    return (
      <p className="text-center text-xl text-red-500">
        Erro ao carregar os dados
      </p>
    );

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="max-w-6xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Personagens de Rick and Morty
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.results.map((character) => {
            const isFavorito = favoritos.some((fav) => fav.id === character.id);

            return (
              <li
                key={character.id}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={character.image}
                  alt={character.name}
                  width={100}
                  height={100}
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <p className="text-center text-lg font-semibold text-gray-700 mb-4">
                  {character.name}
                </p>
                <button
                  onClick={() =>
                    isFavorito
                      ? dispatch(removeFavorito(character.id))
                      : dispatch(addFavorito(character))
                  }
                  className={`px-4 py-2 rounded-lg text-white font-semibold transition-colors duration-200 ${
                    isFavorito
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {isFavorito ? "Remover dos Favoritos" : "Favoritar"}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
