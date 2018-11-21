import { combineReducers } from 'redux';
import users from './users/usersReducer';
import products from './products/productsReducer';
import cart from './cart/cartReducer';
import entities from './entities/entitiesReducer';


export default combineReducers({
  users,
  products,
  cart,
  entities,
});