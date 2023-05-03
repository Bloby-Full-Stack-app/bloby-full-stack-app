import {
  DELETE_TRACKS_FAIL,
  DELETE_TRACKS_SUCCESS,
  GET_SINGLE_TRACK_SUCCESS,
  GET_TRACKS_FAIL,
  GET_TRACKS_SUCCESS,
  LIKE_TRACK_FAIL,
  LIKE_TRACK_SUCCESS,
  POST_TRACKS_FAIL,
  POST_TRACKS_SUCCESS,
  UPDATE_TRACKS_FAIL,
  UPDATE_TRACKS_SUCCESS,
  UPLOAD_TRACKS_FAIL,
  UPLOAD_TRACKS_SUCCESS,
} from '../constants.jsx';

const initialState = {
  loading: true,
  error: '',
  tracksList: [],
  tracks: '',
};

export default function tracks(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TRACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tracksList: payload,
      };
    case GET_SINGLE_TRACK_SUCCESS:
      return {
        ...state,
        track: payload,
      };
    case POST_TRACKS_SUCCESS:
    case UPLOAD_TRACKS_SUCCESS:
    case LIKE_TRACK_SUCCESS:
    case UPDATE_TRACKS_SUCCESS:
    case DELETE_TRACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tracks: payload,
      };
    case LIKE_TRACK_FAIL:
    case GET_TRACKS_FAIL:
    case POST_TRACKS_FAIL:
    case UPLOAD_TRACKS_FAIL:
    case UPDATE_TRACKS_FAIL:
    case DELETE_TRACKS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
