import * as types from './actionTypes';
import BrandApi from '../api/BrandApi';

export function loadBrands(id) {
  return function(dispatch) {
    return BrandApi.getBrands(id).then(data => {
      dispatch(loadBrandsSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadBrandsSuccess(brands) {
  return {type: types.LOAD_BRANDS_SUCESS, brands}
}
