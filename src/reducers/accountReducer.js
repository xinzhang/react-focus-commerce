import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState.account, action) {
  switch (action.type) {

    case types.ACCOUNT_LOGIN_SUCESS:
      return action.account;

    case types.ACCOUNT_REGISTER_SUCESS:
      return action.account;

    default:
      return state;
  }
}
