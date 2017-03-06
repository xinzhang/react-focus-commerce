class BrandApi {
  static getBrands() {
    return fetch('/api/brands/').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateBrands(brands) {
    const request = new Request('/api/admin/brands/update', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({brands: brands})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default BrandApi;
