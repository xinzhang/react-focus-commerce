import * as types from './actionTypes';
import blogApi from '../api/BlogApi';

export function loadBlogs() {
  return function(dispatch) {
    return blogApi.getAllBlogs().then(data => {
      dispatch(loadBlogsSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadBlogsSuccess(blogs) {
  return {type: types.LOAD_BLOGS_SUCESS, blogs}
}

export function loadBlogDetail(id) {
  return function(dispatch) {
    return blogApi.getBlogDetail(id).then(data => {
      dispatch(loadBlogDetailSuccess(data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadBlogDetailSuccess(blog) {
  return {type: types.LOAD_BLOG_DETAIL_SUCESS, blog}
}
