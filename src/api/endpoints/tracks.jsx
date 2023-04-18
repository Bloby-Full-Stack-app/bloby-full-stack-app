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
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data,
    }
}
  