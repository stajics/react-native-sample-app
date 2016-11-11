import 'react-native';
import React from 'react';
import { Profile } from '../../../app/containers/profile/Profile.react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'; // eslint-disable-line

it('renders correctly', () => {
  const profile = renderer.create(
    <Profile
      text={'TEST TEXT'}
      title={'TEST TITLE'}
    />
  ).toJSON();
  expect(profile).toMatchSnapshot();
});
