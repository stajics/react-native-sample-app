import 'react-native';
import React from 'react';
import { Home } from '../../../app/containers/home/Home.react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'; // eslint-disable-line

it('renders correctly', () => {
  const home = renderer.create(
    <Home
      text={'TEST TEXT'}
      title={'TEST TITLE'}
    />
  ).toJSON();
  expect(home).toMatchSnapshot();
});
