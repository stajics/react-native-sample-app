import { Record } from 'immutable';

const InitialState = Record({
});

const initialState = new InitialState();

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
