import { Navigate } from 'react-router-dom';
import axios from 'axios';

export default function api() {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
  });

  api.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        Promise.reject();
        return <Navigate replace to='/login' />;
      }
      return Promise.reject(error);
    }
  );

  return api;
}
