import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul className="poke-list cf">
        {
          this.props.pokemon.map((pokemon, idx) => (
            <li className="poke-item cf" key={idx}>
              <p className="poke-name">{pokemon.name}</p>
              <img className="poke-pic" src={pokemon.image_url}></img>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default PokemonIndex;
