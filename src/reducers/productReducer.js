import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productReducer(state = initialState.products, action) {
  switch (action.type) {

    case types.LOAD_PRODUCTS_SUCESS:
      //return Object.assign([], state, action.payload);
    //   return Object.assign({}, state, {
    //    products: action.products
    //  })
      return action.products;

    case types.LOAD_LATEST_PRODUCTS_SUCESS:
        console.log('LOAD_LATEST_PRODUCTS_SUCESS');
        console.log(state);
        //return Object.assign([], state, action.payload);
       return Object.assign({}, state, {
          products: action.latestProducts
        });

    case types.LOAD_SPECIAL_PRODUCTS_SUCESS:
        //return Object.assign([], state, action.payload);
        console.log('LOAD_SPECIAL_PRODUCTS_SUCESS');
        console.log(state);
       return Object.assign({}, state, {
          products: action.latestProducts
        })

    default:
      return state;
  }
}
