import {
    SET_AUTH,
    AUTH_FAILED,
  } from '../constants';
  
  const initialState = {
    loading: true,
    auth: null,
  };
  
  export default function auth(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case SET_AUTH:
        return {
          ...state,
          loading: false,
          auth: payload,
        };
      case AUTH_FAILED:
        return {
          ...state,
          loading: false,
        };
      default:
        return state;
    }
  }
  