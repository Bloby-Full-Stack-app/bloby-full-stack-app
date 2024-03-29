const token = localStorage.getItem('_auth');

export const fetchTracks = params => {
  return {
    url: `http://localhost:8090/api/fetchtracks`,
    method: 'GET',
    params,
  };
};

export const fetchLikedTracks = params => {
  return {
    url: `http://localhost:8090/api/fetchlikedtracks`,
    method: 'GET',
    params,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  };
};

export const addTrack = (data) => {
  return {
    url: `http://localhost:8090/api/addtrack`,
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  }
};

export const mergeTracks = (data) => {
  return {
    url: `http://localhost:8090/api/mergetracks`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      data,
  }
};

export const trimTrack = (data) => {
  return {
    url: `http://localhost:8090/api/trimTrack`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
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
        Authorization: `${token}`,
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

export const likeUnlikeTrack = ( id, params ) => {
  return {
    url: `http://localhost:8090/api/likeTrack/${id}`,
    method: 'POST',
    params,
  };
};

export const fetchCurrentUserReleases = params => {
  return {
    url: `http://localhost:8090/api/getCurrentUserReleases`,
    method: 'GET',
    params,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  };
};
