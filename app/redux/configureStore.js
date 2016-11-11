import { applyMiddleware, createStore, compose } from 'redux';
// middleware
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import authenticatedApiCall from './middleware/authenticatedApiCall';
import apiCall from './middleware/apiCall';
import rootReducer from './rootReducer';
// import sessioning from './utils/middleware/sessioning';

const logger = createLogger();
const middleware = [thunk, apiCall, authenticatedApiCall, logger];

const configureStore = (initialState = undefined) => {
  const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer, initialState);
  return store;
};

export default configureStore;
