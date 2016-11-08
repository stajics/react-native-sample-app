import { Record } from 'immutable';
import { FETCH_USER_SUCCESS } from '../authentication/constants';

const InitialState = Record({
  title: 'Profile Initial Title',
  userId: null,
  username: '',
});

const initialState = new InitialState();

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE_TITLE':
      return state.set('title', action.title);
    case FETCH_USER_SUCCESS:
      return state.set('userId', action.payload[0].id).set('username', action.payload[0].username);
    default:
      return state;
  }
};
