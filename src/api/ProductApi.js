class ProductApi {
  static getAllProducts(pageno) {
    return fetch('/api/products/' + pageno).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getProductsByCategory(category) {
    return fetch('/api/products/category/' + category).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getRelatedProducts(prodId) {
    return fetch('/api/relatedproducts/' + prodId).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getProductDetail(id) {
    return fetch('/api/product/' + id).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default ProductApi;
