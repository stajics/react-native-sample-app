import { Record } from 'immutable';

const InitialState = Record({
  isLoggedIn: false,
});

const initialState = new InitialState();

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return state.set('isLoggedIn', true);
    case 'LOGOUT_SUCCESS':
      return state.set('isLoggedIn', false);
    default:
      return state;
  }
};
