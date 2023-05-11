import {
    SET_AUTH,
    AUTH_FAILED,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
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
      case REGISTER_SUCCESS:
        return{
          ...state,
          loading: false,
          auth: payload,
        }

      case REGISTER_FAIL:
        return {
          ...state,
          loading: false,
          auth: payload,
        }
      default:
        return state;
    }
  }
  