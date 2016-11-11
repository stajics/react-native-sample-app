import 'react-native';
import React from 'react';
import Button from '../../app/components/Button.react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'; // eslint-disable-line

it('renders not loading button', () => {
  const button = renderer.create(
    <Button
      text={'LOGIN'}
      onPress={jest.fn}
    />
  ).toJSON();
  expect(button).toMatchSnapshot();
});

it('renders isLoadng button', () => {
  const button = renderer.create(
    <Button
      text={'LOGIN'}
      onPress={jest.fn}
      isLoading
    />
  ).toJSON();
  expect(button).toMatchSnapshot();
});
