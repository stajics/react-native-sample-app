import { AUTH_API_CALL } from '../../redux/middleware/authenticatedApiCall';
import { API_CALL } from '../../redux/middleware/apiCall';
import * as actions from './constants';

export const login = (username, password) => dispatch =>
  dispatch({
    [API_CALL]: {
      method: 'POST',
      path: '/login',
      types: [actions.LOGIN_START, actions.LOGIN_SUCCESS, actions.LOGIN_ERROR],
      body: JSON.stringify({ username, password }),
    },
  });

export const logout = () => dispatch =>
  dispatch({
    type: 'LOGOUT_SUCCESS',
  });

export const fetchUser = (token = 1) => dispatch =>
  dispatch({
    [AUTH_API_CALL]: {
      method: 'GET',
      path: `/users?token=${token}`,
      types: [actions.FETCH_USER_START, actions.FETCH_USER_SUCCESS, actions.FETCH_USER_ERROR],
    },
  });
