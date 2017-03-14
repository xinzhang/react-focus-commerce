import * as types from './actionTypes';
import accountApi from '../api/AccountApi';

export function registerAccount(acct) {
  return function(dispatch) {
    return accountApi.registerAccount(acct).then(data => {
      dispatch(registerAccountSuccess(data));
    }).catch(error => {
      dispatch(registerAccountFailure(error));
      throw(error);
    });
  }
}

export function registerAccountSuccess(account) {
  return {type: types.ACCOUNT_REGISTER_SUCESS, account}
}

export function registerAccountFailure(error) {
  return {type: types.ACCOUNT_REGISTER_FAILURE, error: "Register error"}
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
  console.log(account);
  sessionStorage.setItem('jwtToken', account.token);
  return {type: types.ACCOUNT_LOGIN_SUCESS, account: account.user}
}

export function loginFailure(error) {
  return {type: types.ACCOUNT_LOGIN_FAILURE, error: "Invalid username or password"}
}

export function loadUserFromToken() {
  let token=sessionStorage.getItem('jwtToken');
  if (!token || token === '') {
    return {type: 'NULL'};
  }

  return function(dispatch) {
    return accountApi.getUserFromToken(token).then(data => {
      dispatch(getTokenSuccess(data));
    }).catch(error => {
      dispatch(getTokenFailure(error));
      throw(error);
    });
  }
}

export function getTokenSuccess(account) {
  return {type: types.ACCOUNT_LOGIN_SUCESS, account: account.user}
}

export function getTokenFailure(error) {
  return {type: types.ACCOUNT_LOGIN_FAILURE, error: "Token expired or failure"}
}

export function resetToken() {
  sessionStorage.removeItem('jwtToken');
  return {type: types.RESET_TOKEN}
}
