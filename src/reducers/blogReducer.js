import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function blogReducer(state = initialState.blogs, action) {

  switch (action.type) {
    case types.LOAD_BLOGS_SUCESS:
      return action.blogs;

    default:
      return state;
  }
}
