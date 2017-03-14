class AccountApi {
  static registerAccount(acct) {
    const request = new Request('/api/account/register', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({account: acct})
    });

    return fetch(request).then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw(response.text())
      }
    }).catch(error => {
      throw error;
    });
  }

  static login(acct) {
    const request = new Request('/api/account/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({email: acct.email, password:acct.password})
    });

    return fetch(request).then(response => {
      if (response.status == 401) {
        throw("Wrong username or password.");
      } else {
        return response.json();
      }
    }).catch(error => {
      throw error;
    });
  }

  static changePassword(acct) {
    const request = new Request('/api/account/changePassword', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({account: acct})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getUserFromToken(token) {
    const request = new Request('/api/account/token?token=' + token, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    });

    return fetch(request).then(response => {
      if (response.status == 401) {
        throw("Token expired or wrong.");
      } else {
        return response.json();
      }
    }).catch(error => {
      throw error;
    });
  }
}

export default AccountApi;
