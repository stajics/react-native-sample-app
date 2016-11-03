import { Record as record } from 'immutable';

const InitialState = record({
  title: 'Initial Title',
});

const initialState = new InitialState();

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return state.set('title', action.title);
    default:
      return state;
  }
};
