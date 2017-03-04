class AdminProductApi {

  static getAllProducts() {
    return fetch('/api/admin/products').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static addProduct(prod) {
    const request = new Request('/api/admin/products/new', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({product: prod})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateProduct(prod) {
    const request = new Request('/api/admin/products/update', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({product: prod})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }


}

export default AdminProductApi;
