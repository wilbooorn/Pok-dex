export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
import * as APIUtil from '../util/api_util';

export const receiveAllPokemon = (pokemon) => {
  debugger
  return {
  type: RECEIVE_ALL_POKEMON,
  pokemon
};};

export const requestAllPokemon = () => dispatch => {
  debugger
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
};
