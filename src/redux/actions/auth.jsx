import axios from '../../api/axios';
import { login } from '../../api/endpoints/auth';
import { SET_AUTH, AUTH_FAILED } from '../constants';

export const doLogin = data => async dispatch => {
    try {
        const res = await axios(login(data));
        await dispatch({
            type: SET_AUTH,
            payload: res.data,
        });
        return res
    } catch (err) {
        const errorMessage = (Object.values(err?.response.data || {}) || []).flat()[0] || ''
        dispatch({
            type: AUTH_FAILED,
        });
        //dispatch(setAlert(errorMessage, 'error'));
        return err
    }
};
