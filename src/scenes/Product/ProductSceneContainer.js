import { connect } from 'react-redux';
import { compose, withHandlers, branch, renderNothing } from 'recompose';
import ProductSceneView from './ProductSceneView';

import * as productsSelectors from '../../modules/products/productsSelectors';
import * as cartActions from "../../modules/cart/cartActions";


const mapStateToProps = (state, props) => ({
  itemsInCart: state.cart.items,
  product: productsSelectors.getProduct(state, props.match.params.id),
});

const mapStateToDispatch = {
  addToCart: cartActions.add,
  removeFromCart: cartActions.remove,
};


const enhancer = compose(
  connect(mapStateToProps, mapStateToDispatch),
  withHandlers({
    onActionAddButtonClick: props => () => props.addToCart(props.product),
    onActionRemoveButtonClick: props => () => props.removeFromCart(props.product)
  }),
  branch(({ product }) => !product, renderNothing)
);

export default enhancer(ProductSceneView);
