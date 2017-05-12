export const selectAllPokemon = state => {
  return Object.keys(state.pokemon).map(pokeId => state.pokemon[pokeId]);
};

export const selectPokemonItem = (state, itemId) => {
  return state.pokemonDetail.items.filter(item => item.id == itemId)[0];
};
