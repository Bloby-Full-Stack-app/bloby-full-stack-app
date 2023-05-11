import axios from '../../api/axios';
import { login, registerUser } from '../../api/endpoints/auth';
import { SET_AUTH, AUTH_FAILED, REGISTER_SUCCESS, REGISTER_FAIL } from '../constants';

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

export const register = data => async dispatch => {
    try {
        const res = await axios(registerUser(data));
        await dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
        return res.data
    } catch (err) {
        const errorMessage = (err?.response?.data?.message || '') || 'An error occurred.';
        dispatch({
          type: REGISTER_FAIL,
          payload: errorMessage,
        });
        return err
    }
};
