import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
// components
import Home from '../components/home/Home.react';
import Settings from '../components/settings/Settings.react';

const scenes = Actions.create(
  <Scene key="homeTabRoot">
    <Scene key="home" title="Home" component={Home} initial />
    <Scene key="homeSettings" title="Settings" component={Settings} />
  </Scene>
);

const HomeRouter = () => (
  <Router scenes={scenes} />
);

export default HomeRouter;
