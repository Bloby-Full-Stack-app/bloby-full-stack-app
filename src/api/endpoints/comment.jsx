const token = localStorage.getItem('_auth');

export const commentPLaylist = ( playlistId, data, params ) => {
    return {
      url: `http://localhost:8090/api/commentPlaylist/${playlistId}`,
      method: 'POST',
      params,
      data,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    };
  };