const token = localStorage.getItem('_auth');

export const getUserPlaylists = params => {
    return {
      url: `http://localhost:8090/api/getPlaylists`,
      method: 'GET',
      params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    };
  };

  export const addPlaylist = (data) => {
    return {
      url: `http://localhost:8090/api/createPlaylist`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        data,
    }
};

  export const addTracksToPlaylist = ( trackId, data, params ) => {
    return {
      url: `http://localhost:8090/api/addTrackToPlaylist/${trackId}`,
      method: 'POST',
      params,
      data,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    };
  };

  export const removeTracksFromPlaylist = ( trackId, data, params ) => {
    return {
      url: `http://localhost:8090/api/removeTrackFromPlaylist/${trackId}`,
      method: 'POST',
      params,
      data,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    };
  };

  export const getPlaylistById = ({playlistId, params}) => {
    return {
      url: `http://localhost:8090/api/getPlaylist/${playlistId}`,
      method: 'GET',
      params,
    };
  };