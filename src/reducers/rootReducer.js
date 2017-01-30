import {combineReducers} from 'redux';
import blogs from './blogReducer';
import products from './productReducer';
import cart from './cartReducer';
import categories from './categoryReducer';

const rootReducer = combineReducers({
  // short hand property names
  blogs,
  products,
  categories,
  cart
})

export default rootReducer;
