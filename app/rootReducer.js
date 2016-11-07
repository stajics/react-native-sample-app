import { combineReducers } from 'redux';
// reducers
import authentication from './containers/authentication/reducer';
import home from './containers/home/reducer';
import profile from './containers/profile/reducer';
import settings from './containers/settings/reducer';
import routes from './routesReducer';

export default combineReducers({
  authentication,
  home,
  profile,
  settings,
  routes,
});
