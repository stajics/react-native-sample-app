import 'react-native';
import React from 'react';
import { SplashScreen } from '../../../app/containers/splashscreen/SplashScreen.react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'; // eslint-disable-line

it('renders correctly', () => {
  const splashscreen = renderer.create(
    <SplashScreen
      appTitle={'TEST APP TITLE'}
    />
  ).toJSON();
  expect(splashscreen).toMatchSnapshot();
});
