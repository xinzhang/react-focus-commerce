class BlogApi {
  static getAllBlogs() {
    return fetch('http://localhost:5000/api/blogs').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getBlogDetail(id) {
    return fetch('http://localhost:5000/api/blog/' + id).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default BlogApi;  
