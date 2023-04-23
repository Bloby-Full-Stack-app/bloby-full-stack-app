export const fetchReleases = params => {
    return {
      url: `http://localhost:8090/api/fetchtracks`,
      method: 'GET',
      params,
    };
  };

  export const fetchCurrentUserReleases = params => {
    return {
      url: `http://localhost:8090/api/getTracks`,
      method: 'GET',
      params,
    };
  };
  
  