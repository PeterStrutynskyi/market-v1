import { compose } from "recompose";
import { connect } from 'react-redux';

import  HeaderView  from "./HeaderView";
import * as actions from "../../modules/users/usersActions";



const mapStateToProps = state => ({
  cartItemsCount: state.cart.items.length,
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = dispatch => ({
  resetUser: () => dispatch(actions.resetCurrentUser())
});


const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default enhancer(HeaderView);