import { applyMiddleware, createStore, compose } from 'redux';
// middleware
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
// import sessioning from './utils/middleware/sessioning';

const logger = createLogger();
// const middleware = [thunk, sessioning, logger];
const middleware = [thunk, logger];

const configureStore = () => {
  const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);
  return store;
};

export default configureStore;
