import PokemonDetail from "./pokemon_detail";
import { requestOnePokemon } from "../../actions/pokemon_actions";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
  pokemon: state.pokemonDetail
});


const mapDispatchToProps = (dispatch) => {
  return {requestOnePokemon: (pokemon) => dispatch(requestOnePokemon(pokemon))
};};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
