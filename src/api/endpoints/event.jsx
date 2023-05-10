const token = localStorage.getItem('_auth');

export const fetchTracks = params => {
  return {
    url: `http://localhost:8090/api/getevents`,
    method: 'GET',
    params,
  };
};

export const addEvent = (data) => {
  return {
    url: `http://localhost:8090/api/addEvent`,
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  }
};

export const updateEvent = (data) => {
  return {
    url: `http://localhost:8090/api/updateEvent/`,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data,
  }
};