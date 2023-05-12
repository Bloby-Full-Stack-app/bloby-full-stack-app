const token = localStorage.getItem('_auth');

export const getEvents = params => {
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
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${token}`,
        },
        data,
    }
};

export const getEventById = ({eventId, params}) => {
    return {
      url: `http://localhost:8090/api/event/${eventId}`,
      method: 'GET',
      params,
    };
  };

export const fetchSavedEvents = params => {
    return {
      url: `http://localhost:8090/api/fetchSavedEvents`,
      method: 'GET',
      params,
      headers: {
        Authorization: `${token}`,
      },
    };
  };

export const saveEvent = ( id, params ) => {
    return {
      url: `http://localhost:8090/api/event/${id}/save`,
      method: 'POST',
      params,
      headers: {
        Authorization: `${token}`,
      },
    };
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