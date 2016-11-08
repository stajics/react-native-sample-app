import { AUTH_API_CALL } from '../../redux/middleware/authenticatedApiCall';
import * as actions from './constants';
import { apiEndpoint } from '../../urls';

export const login = (username, password) => (dispatch) => {
  dispatch({
    type: actions.LOGIN_START,
  });
  return fetch(`${apiEndpoint}/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
  .then((response) => {
    if (response.status >= 400) {
      return response.json().then((data) => { throw data; });
    }
    return response.json();
  })
  .then(
    (data) => {
      dispatch({
        type: actions.LOGIN_SUCCESS,
        response: data,
      });
      return { status: 200, body: data };
    },
    (error) => {
      dispatch({
        type: actions.LOGIN_ERROR,
        error,
      });
      return { status: 400, body: error };
    }
  );
};

export const logout = () => dispatch =>
  dispatch({
    type: 'LOGOUT_SUCCESS',
  });

export const getUser = (id = 1) => dispatch =>
  dispatch({
    [AUTH_API_CALL]: {
      method: 'GET',
      path: `/users?token=${id}`,
      types: [actions.FETCH_USER_START, actions.FETCH_USER_SUCCESS, actions.FETCH_USER_ERROR],
    },
  });
