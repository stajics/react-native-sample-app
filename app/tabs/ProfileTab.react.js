import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
// components
import Profile from '../components/profile/Profile.react';
import Settings from '../components/settings/Settings.react';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="profile" title="Profile" component={Profile} initial />
    <Scene key="profileSettings" title="Settings" component={Settings} />
  </Scene>
);

const ProfileRouter = () => (
  <Router scenes={scenes} />
);

export default ProfileRouter;
