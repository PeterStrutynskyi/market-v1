import { connect } from 'react-redux';
import { branch, compose, lifecycle, renderComponent, withHandlers } from "recompose";

import * as productsSelectors from "../../modules/products/productsSelectors";
import * as productsOperations from "../../modules/products/productsOperations";
import * as cartActions from "../../modules/cart/cartActions";

import MyLoader from "../../components/SceneCommonStyles/Loader";
import HomeSceneView from "./HomeSceneView";
import ErrorScene from "../Error/ErrorScene";


const mapStateToProps = (state) => ({
  itemsInCart: state.cart.items,
  products: productsSelectors.getProducts(state),
  isLoading: state.products.isLoading,
  isError: !!state.products.error,
  error: state.products.error,
});


const mapStateToDispatch = {
  fetchProducts: productsOperations.fetchAllProducts,
  addToCart: cartActions.add,
  removeFromCart: cartActions.remove,
};

const enhancer = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch,
  ),
  withHandlers({
    onActionButtonClick: props => () => props.addToCart(props.product)
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchProducts();
    },
  }),
  branch(({ isLoading }) => isLoading, renderComponent(MyLoader)),
  branch(({ isError }) => isError, renderComponent(ErrorScene)),
);



export default enhancer(HomeSceneView);