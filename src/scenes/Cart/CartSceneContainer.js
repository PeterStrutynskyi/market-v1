import { compose, withHandlers } from "recompose";
import { connect } from 'react-redux'


import * as cartActions from "../../modules/cart/cartActions";
import * as cartSelectors from '../../modules/cart/cartSelectors';
import * as productsOperations from "../../modules/products/productsOperations";

import CartSceneView from "./CartSceneView";


const mapStateToProps = (state) => ({
  items: cartSelectors.getProducts(state),
  totalPrice: cartSelectors.getTotalPrice(state),
});

const mapStateToDispatch = {
  fetchProducts: productsOperations.fetchAllProducts,
  removeFromCart: cartActions.remove,
};


const enhancer = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch,
  ),
  withHandlers({
    onChange: () => () => {
      console.log('Cart')
    }
  })
);


export default enhancer(CartSceneView);
