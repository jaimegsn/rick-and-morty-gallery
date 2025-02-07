import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({ // Criando a api com createAPI
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }), // definindo url base
  endpoints: (builder) => ({ // Armazena vários endpoints

    // criando um endpoint chamado getCharacters, o resultado da API será { results: [] }
    // qualquer método definido em builder.query() automaticamente faz um GET.
    getCharacters: builder.query<{ results: any[] }, void>({ 
      query: () => 'character', // define uma URL relativa /character que é concatenada com a url Base
    }),
  }),
});

// hook gerado automaticamente pelo RTK Query para consumir o endpoint getCharacters
// quando chamamos
export const { useGetCharactersQuery } = api;
