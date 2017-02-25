import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState.account, action) {
  switch (action.type) {

    case types.ACCOUNT_LOGIN_SUCESS:
      return Object.assign({}, action.account, {status: 'authenticated'});

    case types.ACCOUNT_LOGIN_FAILURE:
      return Object.assign({}, initialState.account, {error_message: action.error});

    case types.ACCOUNT_REGISTER_SUCESS:
      return action.account;

    default:
      return state;
  }
}
