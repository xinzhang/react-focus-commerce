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

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

const store = configureStore();
store.dispatch(loadBlogs());
store.dispatch(loadBlogCategories());
store.dispatch(loadProducts());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  ,
  document.getElementById('root')
);
