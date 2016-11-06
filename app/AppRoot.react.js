import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
// components
import HomeTab from './tabs/HomeTab.react';
import ProfileTab from './tabs/ProfileTab.react';

const AppRoot = () => (
  <ScrollableTabView tabBarPosition="bottom">
    <HomeTab tabLabel="Home" />
    <ProfileTab tabLabel="Profile" />
  </ScrollableTabView>
);

export default AppRoot;
