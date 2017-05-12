import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import configureStore from './store/store';
import Root from './root';
import { HashRouter, Route } from 'react-router-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';


window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = APIUtil.fetchAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;

document.addEventListener('DOMContentLoaded', () => {
  var song = document.getElementById("yes-audio");
  var logo = document.getElementById("play");
  logo.addEventListener("click", ()=> {
    if(song.paused){
      song.play();
    }
    else{
      song.pause();
    }
  });
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
