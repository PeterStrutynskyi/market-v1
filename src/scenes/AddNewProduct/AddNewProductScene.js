import { compose, withHandlers, withProps } from 'recompose';
import { FORM_ERROR } from "final-form";

import { routes } from "../../routes/constants";
import * as Api from "../../api/Api";

import ProductForm from "../../components/Products/ProductForm/ProductForm";



const enhancer = compose(
  withProps(
    () => ({
      leftButtonBackgroundColor: '#0089cf',
      rightButtonBackgroundColor: '#0089cf',
      leftButtonTitle: 'Save',
      rightButtonTitle: 'Back',
    })
  ),
  withHandlers({
    onClickLeftButton: (props) => async (values) => {
      try {
        await Api.Products.createProduct(values);
        props.history.push(routes.admin);
      } catch (e) {
        return {
          [FORM_ERROR]: 'Something went wrong...'
        };
      }
    },
    onClickRightButton: (props) => () => {
      props.history.push(routes.admin);
    }
  }),
);

export default enhancer(ProductForm);
