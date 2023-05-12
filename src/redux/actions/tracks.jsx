import axios from '../../api/axios';
import { addTrack, likeUnlikeTrack, mergeTracks, trimTrack, uploadTrack } from '../../api/endpoints/tracks';
import api from '../../utils/api';
import {
  API,
  GET_SINGLE_TRACK_FAIL,
  GET_SINGLE_TRACK_SUCCESS,
  GET_TRACKS_FAIL,
  GET_TRACKS_SUCCESS,
  LIKE_TRACK_FAIL,
  LIKE_TRACK_SUCCESS,
  POST_TRACKS_FAIL,
  POST_TRACKS_SUCCESS,
  UPLOAD_TRACKS_FAIL,
  UPLOAD_TRACKS_SUCCESS,
} from '../constants.jsx';
import { setAlert } from './alert';

const token = localStorage.getItem('_auth');

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${token}`,
  },
};

// Fetch all Tracks
export const getAllTracks = () => async dispatch => {
  try {
    const res = await api().get(API, config);
    dispatch({
      type: GET_TRACKS_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: GET_TRACKS_FAIL,
      payload: err.response.data.message,
    });
    //dispatch(setAlert(err.response.data.message, 'error'));
  }
};

// Create or update Track
export const createTrack = (data) => async dispatch => {
  try {
    const res = await axios(addTrack(data))
    await dispatch({
      type: POST_TRACKS_SUCCESS,
      payload: res.data.message,
    });
    dispatch(setAlert('Track created successfully', 'success'));
  } catch (err) {
    dispatch({
      type: POST_TRACKS_FAIL,
      payload: err.response.data.message,
    });
    //dispatch(setAlert(err.response.data.message, 'error'));
  }
};

// Create or update Track
export const getUploadedTrack = (data) => async dispatch => {
  try {
    const res = await axios(uploadTrack(data))
    await dispatch({
      type: UPLOAD_TRACKS_SUCCESS,
      payload: res.data.message,
    });
    return res.data;
    //dispatch(setAlert(res.data.message, 'success'));
  } catch (err) {
    dispatch({
      type: UPLOAD_TRACKS_FAIL,
      payload: err.response.data.message,
    });
    //dispatch(setAlert(err.response.data.message, 'error'));
  }
};

export const getTrack = trackId => async dispatch => {
  try {
    const res = await api().get(API + trackId, config);
    dispatch({
      type: GET_SINGLE_TRACK_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: GET_SINGLE_TRACK_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const getUploadedTracks = data => async dispatch => {
  try {
    const res = await axios(mergeTracks(data))
    await dispatch({
      type: UPLOAD_TRACKS_SUCCESS,
      payload: res.data.message,
    });
    dispatch(setAlert('Tracks merged successfully', 'success'));
    return res.data;
    //dispatch(setAlert(res.data.message, 'success'));
  } catch (err) {
    dispatch({
      type: UPLOAD_TRACKS_FAIL,
      payload: err.response.data.message,
    });
    //dispatch(setAlert(err.response.data.message, 'error'));
  }
};

export const getTrimmedTrack = data => async dispatch => {
  try {
    const res = await axios(trimTrack(data))
    await dispatch({
      type: UPLOAD_TRACKS_SUCCESS,
      payload: res.data.message,
    });
    dispatch(setAlert('Track trimmed successfully', 'success'));
    return res.data;
    //dispatch(setAlert(res.data.message, 'success'));
  } catch (err) {
    dispatch({
      type: UPLOAD_TRACKS_FAIL,
      payload: err.response.data.message,
    });
    //dispatch(setAlert(err.response.data.message, 'error'));
  }
};

export const likeTrack = trackId => async dispatch => {
  try {
    const res = await axios(likeUnlikeTrack(trackId))
    
    await dispatch({
      type: LIKE_TRACK_SUCCESS,
      payload: res.data.message,
    });
    dispatch(setAlert(res.data.message, 'success'));
    return res.data;
    //dispatch(setAlert(res.data.message, 'success'));
  } catch (err) {
    dispatch({
      type: LIKE_TRACK_FAIL,
      payload: err.response.data.message,
    });
    //dispatch(setAlert(err.response.data.message, 'error'));
  }
};
