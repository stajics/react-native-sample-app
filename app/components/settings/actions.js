export const setTitle = title => dispatch =>
  dispatch({
    type: 'SET_SETTINGS_TITLE',
    title,
  });

export const setTitleBasicActionCreator = title =>
  ({
    type: 'SET_SETTINGS_TITLE',
    title,
  });
