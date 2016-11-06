import { Record as record } from 'immutable';

const InitialState = record({
  title: 'Home Initial Title',
});

const initialState = new InitialState();

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_HOME_TITLE':
      return state.set('title', action.title);
    default:
      return state;
  }
};
