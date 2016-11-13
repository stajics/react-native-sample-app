import { combineReducers } from 'redux';
// reducers
import { reducer as formReducer } from 'redux-form';
import authentication from '../containers/authentication/reducer';
import home from '../containers/home/reducer';
import profile from '../containers/profile/reducer';
import settings from '../containers/settings/reducer';
import routes from './reducers/routesReducer';
import flags from './reducers/flagsReducer';

export default combineReducers({
  form: formReducer,
  authentication,
  home,
  profile,
  settings,
  routes,
  flags,
});
