import 'react-native';
import React from 'react';
import Index from '../app/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'; // eslint-disable-line

it('renders correctly', () => {
  const index = renderer.create(
    <Index />
  ).toJSON();
  expect(index).toMatchSnapshot();
});
