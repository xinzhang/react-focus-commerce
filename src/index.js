import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import {loadBlogs} from './actions/blogActions';
import {loadBlogCategories} from './actions/blogActions';
import {loadProducts} from './actions/productActions';
import {loadShoppingCart} from './actions/cartActions';
import {loadCategories} from './actions/categoryActions';
import {loadBrands} from './actions/brandActions';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

console.log('store configured');

const store = configureStore();
store.dispatch(loadBlogs());
store.dispatch(loadBlogCategories());
store.dispatch(loadCategories());
store.dispatch(loadProducts());
store.dispatch(loadBrands());

//store.dispatch(loadShoppingCart());
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  ,
  document.getElementById('root')
);
