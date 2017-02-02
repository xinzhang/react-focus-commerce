import {combineReducers} from 'redux';
import blogs from './blogReducer';
import products from './productReducer';
import cart from './cartReducer';
import categories from './categoryReducer';
import blogcategories from './blogCategoriesReducer';

import relatedProducts from './relatedProductReducer';
import specialProducts from './specialProductReducer';
import latestProducts from './latestProductReducer';

const rootReducer = combineReducers({
  // short hand property names
  blogs,
  products,
  categories,
  cart,
  blogcategories,
  relatedProducts,
  specialProducts,
  latestProducts,
})

export default rootReducer;