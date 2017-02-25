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
      return response.json();
    }).catch(error => {
      return error;
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

}

export default AccountApi;