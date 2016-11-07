import { combineReducers } from 'redux';
// reducers
import home from './components/home/reducer';
import profile from './components/profile/reducer';
import settings from './components/settings/reducer';
import routes from './routesReducer';

export default combineReducers({
  home,
  profile,
  settings,
  routes,
});
