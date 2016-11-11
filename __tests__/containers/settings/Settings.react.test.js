import 'react-native';
import React from 'react';
import { Settings } from '../../../app/containers/settings/Settings.react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'; // eslint-disable-line

it('renders correctly', () => {
  const settings = renderer.create(
    <Settings
      text={'TEST TEXT'}
      title={'TEST TITLE'}
    />
  ).toJSON();
  expect(settings).toMatchSnapshot();
});
