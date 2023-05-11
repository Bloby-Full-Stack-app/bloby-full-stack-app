import axios from '../../api/axios';
import { addEvent, saveEvent } from '../../api/endpoints/event';
import api from '../../utils/api';
import {
    ADD_EVENT_FAIL,
    ADD_EVENT_SUCCESS,
    ADD_EVENT_TO_FAVORITES_FAIL,
    ADD_EVENT_TO_FAVORITES_SUCCESS,
    API,
} from '../constants.jsx';

const token = localStorage.getItem('_auth');

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${token}`,
  },
};

// Create or update event
export const createEvent = (data) => async dispatch => {
  try {
    const res = await axios(addEvent(data))
    await dispatch({
      type: ADD_EVENT_SUCCESS,
      payload: res.data.message,
    });
    //dispatch(setAlert(res.data.message, 'success'));
  } catch (err) {
    dispatch({
      type: ADD_EVENT_FAIL,
      payload: err.response.data.message,
    });
    //dispatch(setAlert(err.response.data.message, 'error'));
  }
};

export const addEventToFavorites = eventId => async dispatch => {
    try {
      const res = await axios(saveEvent(eventId))
      
      await dispatch({
        type: ADD_EVENT_TO_FAVORITES_SUCCESS,
        payload: res.data.message,
      });
      return res.data;
      //dispatch(setAlert(res.data.message, 'success'));
    } catch (err) {
      dispatch({
        type: ADD_EVENT_TO_FAVORITES_FAIL,
        payload: err.response.data.message,
      });
      //dispatch(setAlert(err.response.data.message, 'error'));
    }
  };