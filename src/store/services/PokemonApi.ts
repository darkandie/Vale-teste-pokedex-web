import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query<unknown, void>({
      query: () => 'pokemon/?offset=20&limit=40',
    }),
  }),
})

export const { useGetAllPokemonsQuery } = pokemonApi;
