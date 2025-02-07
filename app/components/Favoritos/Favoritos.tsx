"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Image from "next/image";

export default function Favoritos() {
  const favoritos = useSelector(
    (state: RootState) => state.favoritos.favoritos
  );

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="max-w-6xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Favoritos
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoritos.map((fav) => (
            <li
              key={fav.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={fav.image}
                alt={fav.name}
                width={100}
                height={100}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <p className="text-center text-lg font-semibold text-gray-700 mb-4">
                {fav.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
