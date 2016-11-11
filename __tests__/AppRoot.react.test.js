import 'react-native';
import React from 'react';
import AppRoot from '../app/AppRoot.react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'; // eslint-disable-line

// store
import { Provider } from 'react-redux'; // eslint-disable-line
import configureStore from '../app/redux/configureStore';

const store = configureStore();

it('renders correctly', () => {
  const appRoot = renderer.create(
    <Provider store={store}>
      <AppRoot />
    </Provider>
  ).toJSON();
  expect(appRoot).toMatchSnapshot();
});
