export const setTitle = title => dispatch =>
  dispatch({
    type: 'SET_TITLE',
    title,
  });

export const setTitleBasicActionCreator = title =>
  ({
    type: 'SET_TITLE',
    title,
  });
