import * as types from '../actions/actionTypes';
import * as adminTypes from '../actions/adminActionTypes';

import initialState from './initialState';

export default function brandReducer(state = initialState.brands, action) {

  switch (action.type) {
    case types.LOAD_BRANDS_SUCESS:
      return action.brands;

    case adminTypes.UPDATE_ADMIN_BRANDS_SUCCESS:
       return action.brands;

    default:
      return state;
  }
}
