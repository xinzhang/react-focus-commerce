class CategoryApi {
  static getCategories() {
    return fetch('/api/categories/').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateCategories(categories) {
    const request = new Request('/api/admin/categories/update', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({categories: categories})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default CategoryApi;
