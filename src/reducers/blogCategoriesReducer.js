import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function blogReducer(state = initialState.blogcategories, action) {
  switch (action.type) {

    case types.LOAD_BLOG_CATEGORIES_SUCCESS:
      console.log("blog categories reducer");
      return action.blogcategories;

    default:
      return state;
  }
}
