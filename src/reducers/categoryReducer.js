import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function categoryReducer(state = initialState.categories, action) {
  switch (action.type) {
    case types.LOAD_CATEGORIES_SUCESS:
      console.log('category reducer');
      console.log(action.Productcategories);
      return action.Productcategories;

    default:
      return state;
  }
}
