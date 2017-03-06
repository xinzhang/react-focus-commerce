class BrandApi {
  static getBrands() {
    return fetch('/api/brands/').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default BrandApi;
