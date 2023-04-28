import { combineReducers } from 'redux';
import tracks from './tracks';
import auth from './auth';
import playlist from './playlist';

export default combineReducers({
    auth,
    tracks,
    playlist,
});
