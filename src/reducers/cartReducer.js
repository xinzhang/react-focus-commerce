import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {

    //case types.LOAD_SHOPING_CART_SUCESS:
    //  return action.cart;

    case types.ADD_SHOPING_CART_ITEM:
        console.log('add shoping card item');
        console.log(state);
        console.log([
          ...state,
          Object.assign({}, action.cartItem)
        ]);
        return [
          ...state,
          Object.assign({}, action.cartItem)
        ]

    case types.REMOVE_SHOPING_CART_ITEM:

        const newState = Object.assign([], state);
        const indexOfCartItemToDelete = state.findIndex(item => {
            return item.prod_id == action.id
        })

        newState.splice(indexOfCartItemToDelete, 1);
        return newState;

    case types.UDPATE_SHOPING_CART_ITEM:
        return [
          ...state.filter(item => item.prod_id != action.prod_id),
          Object.assign({}, action.cartItem)
        ]

    default:
      return state;
  }
}
