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

  export const getPlaylistById = ({playlistId, params}) => {
    return {
      url: `http://localhost:8090/api/getPlaylist/${playlistId}`,
      method: 'GET',
      params,
    };
  };