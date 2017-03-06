import * as types from '../actions/actionTypes';
import * as adminTypes from '../actions/adminActionTypes';

import initialState from './initialState';

export default function brandReducer(state = initialState.brands, action) {
  switch (action.type) {
    case types.LOAD_BRAND_SUCESS:
      console.log('category reducer');
      console.log(action.brands);
      return action.brands;

    case adminTypes.UPDATE_ADMIN_BRANDS_SUCESS:
      return action.brands;

    default:
      return state;
  }
}
