import React from 'react';
import {Link} from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let pokeId = this.props.pokemon.id;
    let pokeURL = "/pokemon/" + pokeId;
    return (
        <li className="poke-item">
          <Link to={pokeURL}>
            <header>
              <img className="poke-pic" src={this.props.pokemon.image_url} />
            </header>
            <h1 className="poke-name">{this.props.pokemon.name}
            </h1>
          </Link>
        </li>
    );
  }
}

export default PokemonIndexItem;
