export const selectAllPokemon = state => {
  return Object.keys(state.pokemon).map(pokeId => state.pokemon[pokeId]);
};
