import * as types from '../actions/actionTypes';
import * as admintypes from '../actions/adminActionTypes';
import initialState from './initialState';

export default function categoryReducer(state = initialState.categories, action) {
  switch (action.type) {
    case types.LOAD_CATEGORIES_SUCESS:
      return action.Productcategories;

    case admintypes.UPDATE_ADMIN_CATEGORIES_SUCCESS:
        return action.categories;
    default:
      return state;
  }
}
