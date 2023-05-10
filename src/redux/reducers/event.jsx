import { 
    ADD_EVENT_FAIL,
    ADD_EVENT_SUCCESS,
    GET_EVENT_FAIL, 
    GET_EVENT_SUCCESS, 
    UPDATE_EVENT_FAIL, 
    UPDATE_EVENT_SUCCESS 
} from '../constants.jsx';
  
  const initialState = {
    loading: true,
    error: '',
    eventsList: [],
  };
  
  export default function event(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_EVENT_SUCCESS:
        return {
          ...state,
          loading: false,
          playlistsList: payload,
        };
      case GET_EVENT_FAIL:
      case ADD_EVENT_SUCCESS:
      case UPDATE_EVENT_SUCCESS:
      case ADD_EVENT_FAIL:
      case UPDATE_EVENT_FAIL:
      default:
        return state;
    }
  }
  