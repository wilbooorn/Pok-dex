import ItemDetail from './item_detail';
import { connect } from 'react-redux';
import { selectPokemonItem } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
    item: selectPokemonItem(state, ownProps.match.params.itemId)
});

// const mapDispatchToProps = (dispatch) => ({
//
// });

export default connect(
  mapStateToProps
)(ItemDetail);
