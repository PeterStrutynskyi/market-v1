import { connect } from 'react-redux';
import { compose } from 'recompose';

import { ProductItemView } from './ProductItemView';

const mapStateToProps = (state) => ({
  cartItemsCount: state.cart.items.length,
  currentUser: state.users.currentUser,
});

const enhancer = compose(
  connect(
    mapStateToProps
  ),
);

export default enhancer(ProductItemView);
