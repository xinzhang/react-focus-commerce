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
    return accountApi.login(acct).then(data => {
      dispatch(loginSuccess(data));
    }).catch(error => {
      dispatch(loginFailure(error));
      throw(error);
    });
  }
}

export function loginSuccess(account) {
  return {type: types.ACCOUNT_LOGIN_SUCESS, account}
}

export function loginFailure(error) {
  return {type: types.ACCOUNT_LOGIN_FAILURE, error: "Invalid username or password"}
}
