export const setTitle = title => dispatch =>
  dispatch({
    type: 'SET_HOME_TITLE',
    title,
  });

export const setTitleBasicActionCreator = title =>
  ({
    type: 'SET_HOME_TITLE',
    title,
  });
