import {
    GET_CURRENT_USER_PLAYLISTS_FAIL,
    GET_CURRENT_USER_PLAYLISTS_SUCCESS,
    POST_ADD_TRACK_TO_PLAYLIST_FAIL,
    POST_ADD_TRACK_TO_PLAYLIST_SUCCESS,
  } from '../constants.jsx';
  
  const initialState = {
    loading: true,
    error: '',
    playlistsList: [],
  };
  
  export default function playlist(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_CURRENT_USER_PLAYLISTS_SUCCESS:
        return {
          ...state,
          loading: false,
          playlistsList: payload,
        };
      case GET_CURRENT_USER_PLAYLISTS_FAIL:
      case POST_ADD_TRACK_TO_PLAYLIST_SUCCESS:
      case POST_ADD_TRACK_TO_PLAYLIST_FAIL:
      default:
        return state;
    }
  }
  