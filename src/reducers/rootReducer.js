import {combineReducers} from 'redux';
import blogs from './blogReducer';
import products from './productReducer';
import cart from './cartReducer';
import categories from './categoryReducer';
import blogcategories from './blogCategoriesReducer';

const rootReducer = combineReducers({
  // short hand property names
  blogs,
  products,
  categories,
  cart,
  blogcategories
})

export default rootReducer;
