/*import { createStore } from 'redux';

// Define initial state
const initialState = {
  currentPlaylist: null,
  currentTrack: null,
};

// Define actions
export const SET_PLAYLIST = 'SET_PLAYLIST';
export const SET_TRACK = 'SET_TRACK';

export function setPlaylist(playlist) {
  return { type: SET_PLAYLIST, payload: playlist };
}

export function setTrack(track) {
  return { type: SET_TRACK, payload: track };
}

// Define reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYLIST:
      return { ...state, currentPlaylist: action.payload };
    case SET_TRACK:
      return { ...state, currentTrack: action.payload };
    default:
      return state;
  }
}

// Create store
const store = createStore(reducer);

export default store;*/

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
