import { Record } from 'immutable';

const InitialState = Record({
  title: 'Profile Initial Title',
});

const initialState = new InitialState();

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE_TITLE':
      return state.set('title', action.title);
    default:
      return state;
  }
};
