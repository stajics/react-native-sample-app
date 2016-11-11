import 'react-native';
import React from 'react';
import TabIcon from '../../app/components/TabIcon.react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'; // eslint-disable-line

it('renders unselected tab icon', () => {
  const tabIcon = renderer.create(
    <TabIcon />
  ).toJSON();
  expect(tabIcon).toMatchSnapshot();
});

it('renders selected tab icon', () => {
  const tabIcon = renderer.create(
    <TabIcon
      selected
    />
  ).toJSON();
  expect(tabIcon).toMatchSnapshot();
});
