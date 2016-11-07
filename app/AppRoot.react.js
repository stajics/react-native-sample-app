import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
// components
import Authentication from './containers/authentication/Authentication.react';
import Home from './containers/home/Home.react';
import Profile from './containers/profile/Profile.react';
import Settings from './containers/settings/Settings.react';
import SplashScreen from './containers/splashscreen/SplashScreen.react';
import TabIcon from './components/TabIcon.react';

const RouterWithRedux = connect()(Router);
// const AuthRouterWithRedux = connect()(Router);
const propTypes = {
  isLoggedIn: PropTypes.bool,
};

const AppRoot = () => (
  <RouterWithRedux>
    <Scene key="root">
      {/* SplashScreen */}
      <Scene key="splash" title="SplashScreen" component={SplashScreen} hideNavBar initial />
      {/* TabBar Container */}
      <Scene
        key="rootTabbar"
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
      {/* Authentication */}
      <Scene key="auth">
        <Scene key="authentication" title="Authentication" component={Authentication} />
      </Scene>
    </Scene>
  </RouterWithRedux>
);

AppRoot.propTypes = propTypes;

const stateToProps = state => ({
  isLoggedIn: state.authentication.isLoggedIn,
});

export default connect(stateToProps, { })(AppRoot);
