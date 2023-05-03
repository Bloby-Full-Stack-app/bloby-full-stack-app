export const fetchTracks = params => {
  return {
    url: `http://localhost:8090/api/fetchtracks`,
    method: 'GET',
    params,
  };
};

export const addTrack = (data) => {
  return {
    url: `http://localhost:8090/api/addtrack`,
    method: 'POST',
    data,
  }
};

export const mergeTracks = (data) => {
  return {
    url: `http://localhost:8090/api/mergetracks`,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data,
  }
};

export const uploadTrack = (data) => {
  return {
    url: `http://localhost:8090/api/uploadTrack`,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data,
  }
};

export const getTrack = ({ id, params }) => {
  return {
    url: `http://localhost:8090/api/getTrack/${id}`,
    method: 'GET',
    params,
  };
};
