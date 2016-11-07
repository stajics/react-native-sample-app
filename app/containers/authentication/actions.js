export const login = () => dispatch =>
  dispatch({
    type: 'LOGIN_SUCCESS',
  });

export const logout = () => dispatch =>
  dispatch({
    type: 'LOGOUT_SUCCESS',
  });
