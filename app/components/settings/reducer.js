import { Record } from 'immutable';

const InitialState = Record({
  title: 'Settings Initial Title',
});

const initialState = new InitialState();

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SETTINGS_TITLE':
      return state.set('title', action.title);
    default:
      return state;
  }
};
