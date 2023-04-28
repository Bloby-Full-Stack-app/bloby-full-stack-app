import {
    POST_ADD_COMMENT_TO_PLAYLIST_SUCCESS,
    POST_ADD_COMMENT_TO_PLAYLIST_FAIL,
  } from '../constants.jsx';
  
  const initialState = {
    loading: true,
    error: '',
    commentsList: [],
  };
  
  export default function playlist(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case POST_ADD_COMMENT_TO_PLAYLIST_SUCCESS:
      case POST_ADD_COMMENT_TO_PLAYLIST_FAIL:
      default:
        return state;
    }
  }
  