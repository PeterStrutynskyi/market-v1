import React from 'react';
import { connect } from 'react-redux';
import { branch, compose, lifecycle, renderComponent } from "recompose";


import * as productsOperations from '../../modules/products/productsOperations';
import * as productsSelectors from '../../modules/products/productsSelectors';

import AdminMainSceneView from "./AdminMainSceneView";
import ErrorScene from "../Error/ErrorScene";
import MyLoader from "../../components/SceneCommonStyles/Loader";


const mapStateToProps = (state) => ({
  products: productsSelectors.getProducts(state),
  isLoading: state.products.isLoading,
  isError: !!state.products.error,
  error: state.products.error,
});


const mapStateToDispatch = {
  fetchAllProducts: productsOperations.fetchAllProducts,
};


const enhancer = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch,
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchAllProducts();
    },
  }),
  branch(({ isLoading }) => isLoading, renderComponent(MyLoader)),
  branch(({ isError }) => isError, renderComponent(ErrorScene)),
);

export default enhancer(AdminMainSceneView);
