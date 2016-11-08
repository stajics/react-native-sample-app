import React, { Component } from 'react';
import { UIManager, Platform } from 'react-native';
// store
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
// components
import AppRoot from './AppRoot.react';

const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <AppRoot />
      </Provider>
    );
  }
}
