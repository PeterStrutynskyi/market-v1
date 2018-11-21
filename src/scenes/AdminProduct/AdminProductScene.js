import { connect } from 'react-redux';
import { compose, branch, renderNothing, withHandlers, withProps } from 'recompose';
import { FORM_ERROR } from "final-form";


import * as productsSelectors from '../../modules/products/productsSelectors';
import ProductForm from "../../components/Products/ProductForm/ProductForm";
import * as Api from "../../api/Api";
import { routes } from "../../routes/constants";



const mapStateToProps = (state, props) => ({
  product: productsSelectors.getProduct(state, props.match.params.id),
});

const enhancer = compose(
  connect(mapStateToProps),
  withProps(
    () => ({
      leftButtonBackgroundColor: '#0089cf',
      rightButtonBackgroundColor: '#cf0000',
      leftButtonTitle: 'Save',
      rightButtonTitle: 'Delete product',
    })
  ),
  withHandlers({
    onClickLeftButton: (props) => async (values) => {
      try {
        await Api.Products.updateProduct(props.match.params.id, values);
        props.history.push(routes.admin);
      } catch (e) {
        return {
          [FORM_ERROR]: 'Something went wrong...'
        };
      }
    },
    onClickRightButton: (props) => async() => {
      try {
        await Api.Products.removeProduct(props.match.params.id);
        props.history.push(routes.admin);
      } catch (e) {
        return {
          [FORM_ERROR]: 'Something went wrong...'
        };
      }
    }
  }),
  branch(({ product }) => !product, renderNothing)
);

export default enhancer(ProductForm);
