import { Record } from 'immutable';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../../containers/authentication/constants';

const InitialState = Record({
  isLoading: {
    login: false,
    fetchUser: false,
  },
  error: {
    login: null,
    getUser: null,
  },
});

const initialState = new InitialState();

export default (state = initialState, action) => {
  switch (action.type) {
    // LOGIN
    case LOGIN_START:
      return state.set('isLoading', { ...state.isLoading, login: true })
        .set('error', { ...state.error, login: null });
    case LOGIN_SUCCESS:
      return state.set('isLoading', { ...state.isLoading, login: true });
    case LOGIN_ERROR:
      return state.set('isLoading', { ...state.isLoading, login: false })
        .set('error', { ...state.error, login: action.payload });
    // GET_USER
    case FETCH_USER_START:
      return state.set('isLoading', { ...state.isLoading, fetchUser: true });
    case FETCH_USER_SUCCESS:
    case FETCH_USER_ERROR:
      return state.set('isLoading', { ...state.isLoading, fetchUser: false, login: false });
    default:
      return state;
  }
};
