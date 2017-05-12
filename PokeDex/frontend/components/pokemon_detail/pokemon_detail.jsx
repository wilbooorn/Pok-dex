import React from 'react';
import ItemDetailContainer from './item_detail_container';
import { Route, Link } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestOnePokemon(newProps.match.params.pokemonId);
    }
  }

  render () {

    const pokeId = this.props.match.params.pokemonId;
    const itemUrl  = "/pokemon/" + pokeId + "/item/";
    const info = !this.props.pokemon.items ? '' : (
            <div className="info">
              <li>
                <ul>
                  Moves:
                  {this.props.pokemon.moves
                    .map((move, i) =>
                    <li key={i}>{move}</li>
                  )}
                </ul>
              </li>
              <li>
                <ul id="pokeItems">
                  {this.props.pokemon.items
                    .map((item, i) => (
                      <li key={i}>
                        <Link to={itemUrl + item.id}>
                          <img src={item.image_url}/>
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
              <li>
                <Route path="/pokemon/:pokeId/item/:itemId" component={ItemDetailContainer} />
              </li>
            </div>
);


    return (
      <div  className="detail">
        <h1>{this.props.pokemon.name}</h1>
        <ul>
          <li >Attack: {this.props.pokemon.attack}</li>
          <li>Defense: {this.props.pokemon.defense}</li>
          <li>
            <img  src={this.props.pokemon.image_url} />
          </li>
        </ul>
        {info}


      </div>
    );
  }
}

export default PokemonDetail;


// <Route path= component={ItemDetailContainer} />
