import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AccountPage from './components/account/AccountPage';
import RegisterPage from './components/account/RegisterPage';
import ForgotPassword from './components/account/ForgotPassword';

import LoginPage from './components/account/LoginPage';
import BlogPage from './components/blog/BlogPage';
import BlogList from './components/blog/BlogList';
import BlogDetail from './components/blog/BlogDetail';

import ProductList from './components/products/ProductList';
import ProductListPage from './components/products/ProductListPage';
import ProductPage from './components/products/ProductPage';
import CartPage from './components/cart/CartPage';
import CheckoutPage from './components/checkout/CheckoutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/blog" component={BlogPage}>
      <Route path="/blog/list" component={BlogList} />
      <Route path="/blog/list/:category" component={BlogList} />
      <Route path="/blog/detail/:id" component={BlogDetail} />
    </Route>
    <Route path="/account" component={AccountPage}>
      <Route path="/account/register" component={RegisterPage} />
      <Route path="/account/login" component={LoginPage} />
      <Route path="/account/forgotPassword" component={ForgotPassword} />
    </Route>
    <Route path="/products" component={ProductListPage}>
      <Route path="/products/list" component={ProductList} />
      <Route path="/products/detail/:id" component={ProductPage} />
      <Route path="/products/cart" component={CartPage} />
      <Route path="/products/checkout" component={CheckoutPage} />
    </Route>
  </Route>
);
