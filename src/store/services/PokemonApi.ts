import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ListPokemon from '../../types/ListPokemon';
import Pokemon from '../../types/Pokemon';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query<ListPokemon, void>({
      query: () => 'pokemon/?limit=40',
    }),
    getPokemonByName: builder.query<Pokemon, string | unknown>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetAllPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi;
