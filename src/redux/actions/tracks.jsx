import axios from '../../api/axios';
import { addTrack } from '../../api/endpoints/tracks';
import api from '../../utils/api';
import {
  API,
  GET_TRACKS_FAIL,
  GET_TRACKS_SUCCESS,
  POST_TRACKS_FAIL,
  POST_TRACKS_SUCCESS,
  UPDATE_TRACKS_SUCCESS,
} from '../constants.jsx';

const token = localStorage.getItem('_auth');

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${token}`,
  },
};

const configFile = {
  headers: {
    'Content-Type': 'multipart/form-data',
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
    //dispatch(setAlert(res.data.message, 'success'));
  } catch (err) {
    dispatch({
      type: POST_TRACKS_FAIL,
      payload: err.response.data.message,
    });
    //dispatch(setAlert(err.response.data.message, 'error'));
  }
};
