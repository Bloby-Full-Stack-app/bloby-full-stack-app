export const fetchReleases = params => {
    return {
      url: `http://localhost:8090/api/fetchtracks`,
      method: 'GET',
      params,
    };
  };
  
  