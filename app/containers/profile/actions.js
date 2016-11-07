export const setTitle = title => dispatch =>
  dispatch({
    type: 'SET_PROFILE_TITLE',
    title,
  });

export const setTitleBasicActionCreator = title =>
  ({
    type: 'SET_PROFILE_TITLE',
    title,
  });
