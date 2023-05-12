import { combineReducers } from 'redux';
import tracks from './tracks';
import auth from './auth';
import playlist from './playlist';
import alert from './alert'

export default combineReducers({
    auth,
    tracks,
    playlist,
    alert
});
