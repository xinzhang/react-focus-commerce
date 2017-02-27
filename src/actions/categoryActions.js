import * as types from './actionTypes';
import CategoryApi from '../api/CategoryApi';

export function loadCategories(id) {
  return function(dispatch) {
    return CategoryApi.getCategories(id).then(data => {
      dispatch(loadCategoriesSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadCategoriesSuccess(Productcategories) {
  return {type: types.LOAD_CATEGORIES_SUCESS, Productcategories}
}
