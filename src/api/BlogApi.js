class BlogApi {
  static getAllBlogs() {
    return fetch('/api/blogs').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getBlogDetail(id) {
    return fetch('/api/blog/' + id).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getBlogCategories() {
    return fetch('/api/blogcategories/').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default BlogApi;
