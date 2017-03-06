import {combineReducers} from 'redux';
import blogs from './blogReducer';
import products from './productReducer';
import cart from './cartReducer';
import categories from './categoryReducer';
import brands from './brandReducer';
import blogcategories from './blogCategoriesReducer';

import relatedProducts from './relatedProductReducer';
import specialProducts from './specialProductReducer';
import latestProducts from './latestProductReducer';
import bestSellerProducts from './bestSellerProductReducer';
import admin_products from './adminProductReducer';

import account from './accountReducer';

const rootReducer = combineReducers({
  // short hand property names
  blogs,
  products,
  categories,
  brands,
  cart,
  blogcategories,
  relatedProducts,
  specialProducts,
  latestProducts,
  bestSellerProducts,
  account,
  admin_products
})

export default rootReducer;
