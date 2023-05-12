import axios from '../../api/axios';
import { addPlaylist, addTracksToPlaylist, getUserPlaylists, removeTracksFromPlaylist } from '../../api/endpoints/playlist';
import {
  GET_CURRENT_USER_PLAYLISTS_SUCCESS,
  GET_CURRENT_USER_PLAYLISTS_FAIL,
  POST_ADD_TRACK_TO_PLAYLIST_SUCCESS,
  POST_ADD_TRACK_TO_PLAYLIST_FAIL,
  REMOVE_TRACK_FROM_PLAYLIST_SUCCESS,
  REMOVE_TRACK_FROM_PLAYLIST_FAIL,
  ADD_PLAYLIST_SUCCESS,
  ADD_PLAYLIST_FAIL
} from '../constants.jsx';
import { setAlert } from './alert';

const token = localStorage.getItem('_auth');

// Fetch all Tracks
export const getCurrentUserPlaylists = () => async dispatch => {
  try {
    const res = await axios(getUserPlaylists());
    dispatch({
      type: GET_CURRENT_USER_PLAYLISTS_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: GET_CURRENT_USER_PLAYLISTS_FAIL,
      payload: err.response.data.message,
    });
    //dispatch(setAlert(err.response.data.message, 'error'));
  }
};

export const addTrackToPlaylist = (trackId, data) => async dispatch => {
  try {
    const res = await axios(addTracksToPlaylist(trackId, data))
    
    await dispatch({
      type: POST_ADD_TRACK_TO_PLAYLIST_SUCCESS,
      payload: res.data.message,
    });
    dispatch(setAlert('Track added to playlist', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ADD_TRACK_TO_PLAYLIST_FAIL,
      payload: err.response.data.message,
    });
    //dispatch(setAlert(err.response.data.message, 'error'));
  }
};

export const removeTrackFromPlaylist = (trackId, data) => async dispatch => {
  try {
    const res = await axios(removeTracksFromPlaylist(trackId, data))
    
    await dispatch({
      type: REMOVE_TRACK_FROM_PLAYLIST_SUCCESS,
      payload: res.data.message,
    });
    return res.data
    //dispatch(setAlert(res.data.message, 'success'));
  } catch (err) {
    dispatch({
      type: REMOVE_TRACK_FROM_PLAYLIST_FAIL,
      payload: err.response.data.message,
    });
    //dispatch(setAlert(err.response.data.message, 'error'));
  }
};

export const createPlaylist = (data) => async dispatch => {
  try {
    const res = await axios(addPlaylist(data))
    await dispatch({
      type: ADD_PLAYLIST_SUCCESS,
      payload: res.data.message,
    });
    dispatch(setAlert('playlist created successfully', 'success'));
    return res.data
  } catch (err) {
    dispatch({
      type: ADD_PLAYLIST_FAIL,
      payload: err.response.data.message,
    });
    //dispatch(setAlert(err.response.data.message, 'error'));
  }
};