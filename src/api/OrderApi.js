class OrderApi {

  //admin only function
  static getAllOrders() {
    return fetch('/api/orders').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getMyOrders(userid) {
    return fetch('/api/orders' + userid).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static submitOrder(order) {
    const request = new Request('/api/orders/new', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({order: order})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  //admin only function
  static cancelOrder(order) {
    const request = new Request('/api/orders/cancel', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({order: order})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default OrderApi;
