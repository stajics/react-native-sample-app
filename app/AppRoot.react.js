import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
// components
import Home from './components/home/Home.react';
import Profile from './components/profile/Profile.react';
import Settings from './components/settings/Settings.react';

const RouterWithRedux = connect()(Router);

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => (
  <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
);

TabIcon.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const AppRoot = () => (
  <RouterWithRedux>
    <Scene key="root">
      {/* Tab Container */}
      <Scene
        key="tabbar"
        tabs
        tabBarStyle={{ backgroundColor: '#FFFFFF' }}
      >
        {/* Tab and it's scenes */}
        <Scene key="homeTab" title="Home" icon={TabIcon}>
          <Scene key="home" title="Home" component={Home} initial />
          <Scene key="homeSettings" title="Settings" component={Settings} />
        </Scene>

        {/* Tab and it's scenes */}
        <Scene key="profileTab" title="Profile" icon={TabIcon}>
          <Scene key="profile" title="Profile" component={Profile} initial />
          <Scene key="profileSettings" title="Settings" component={Settings} />
        </Scene>
      </Scene>
    </Scene>
  </RouterWithRedux>
);

export default AppRoot;
