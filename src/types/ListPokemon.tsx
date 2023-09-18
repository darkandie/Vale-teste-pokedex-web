export default interface ListPokemon {
  results: Array<{name: string; url: string}> | undefined;
}