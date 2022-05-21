export default class BookmanAPI {
  static BASE_URL = 'https://bookman-api.herokuapp.com/api/v1';

  // create a store
  static createStore = async (storeInfo) => {
    await fetch(`${this.BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(storeInfo),
    })
      .then((res) => {
        const data = res.json();

        if (data) {
          return data;
        }

        return [];
      })
      .catch((e) => e);
  };

  // login store
  static loginStore = async (storeInfo) => {
    await fetch(`${this.BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(storeInfo),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      if (res.status === 404) {
        return Promise.reject('User not Found!');
      }

      return [];
    });
  };

  static getToken = async () => {
    const token = await JSON.parse(localStorage.getItem('bookman_token'));

    if (token) {
      return token;
    }

    return [];
  };
}