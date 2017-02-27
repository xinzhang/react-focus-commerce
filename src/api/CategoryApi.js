class CategoryApi {
  static getCategories() {
    return fetch('/api/categories/').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default CategoryApi;
