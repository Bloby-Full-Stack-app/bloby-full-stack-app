import axios from '../../api/axios';
import { commentPLaylist } from '../../api/endpoints/comment';
import {
  POST_ADD_COMMENT_TO_PLAYLIST_SUCCESS,
  POST_ADD_COMMENT_TO_PLAYLIST_FAIL,
} from '../constants.jsx';

const token = localStorage.getItem('_auth');

export const addCommentToPlaylist = (playlistId, data) => async dispatch => {
  try {
    const res = await axios(commentPLaylist(playlistId, data))
    
    await dispatch({
      type: POST_ADD_COMMENT_TO_PLAYLIST_SUCCESS,
      payload: res.data.message,
    });
    return res.data;
    //dispatch(setAlert(res.data.message, 'success'));
  } catch (err) {
    dispatch({
      type: POST_ADD_COMMENT_TO_PLAYLIST_FAIL,
      payload: err.response.data.message,
    });
    //dispatch(setAlert(err.response.data.message, 'error'));
  }
};