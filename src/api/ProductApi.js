class ProductApi {
  static getAllProducts(pageno) {
    return fetch('http://localhost:5000/api/products/' + pageno).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getRelatedProducts(prodId) {
    return fetch('http://localhost:5000/api/relatedproducts/' + prodId).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getProductDetail(id) {
    return fetch('http://localhost:5000/api/product/' + id).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getCategories() {
    return fetch('http://localhost:5000/api/categories/').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ProductApi;
