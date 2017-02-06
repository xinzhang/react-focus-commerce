import * as types from './actionTypes';
import accountApi from '../api/AccountApi';

export function registerAccount(acct) {
  return function(dispatch) {
    return accountApi.registerAccount(acct).then(data => {
      console.log(data);
      dispatch(registerAccountSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function registerAccountSuccess(account) {
  return {type: types.ACCOUNT_REGISTER_SUCESS, account}
}

export function login(acct) {
  return function(dispatch) {
    console.log('login action');
    return accountApi.login(acct).then(data => {
      dispatch(loginSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loginSuccess(acct) {
  return {type: types.ACCOUNT_LOGIN_SUCESS, acct}
}
