const token = localStorage.getItem('_auth');

export const login = (data) => {
    return {
        url: `http://localhost:8090/api/login`,
        method: 'POST',
        data,
    }
}

export const registerUser = (data) => {
    return {
        url: `http://localhost:8090/api/register`,
        method: 'POST',
        data,
    }
}

export const getUsers = params => {
    return {
      url: `http://localhost:8090/api/getusers`,
      method: 'GET',
      params,
      headers: {
        Authorization: `${token}`,
      },
    };
  };