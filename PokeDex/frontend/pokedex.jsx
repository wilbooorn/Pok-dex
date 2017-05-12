import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import configureStore from './store/store';
import Root from './root';
import { HashRouter, Route } from 'react-router-dom';


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
  ReactDOM.render(<Root store={store} />, root);
});
