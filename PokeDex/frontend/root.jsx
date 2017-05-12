import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';
import PokemonDetailContainer from './components/pokemon_detail/pokemon_detail_container';
import ItemDetailContainer from './components/pokemon_detail/item_detail_container';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
      <HashRouter>
        <div className="parent">
        <Route path="/" component={ PokemonIndexContainer } />
        <Route path="/pokemon/:pokemonId" component={ PokemonDetailContainer } />
        </div>
      </HashRouter>
    </Provider>
);

export default Root;
