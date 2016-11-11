import 'react-native';
import React from 'react';
import InputField from '../../app/components/InputField.react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'; // eslint-disable-line

it('renders input field', () => {
  const inputField = renderer.create(
    <InputField />
  ).toJSON();
  expect(inputField).toMatchSnapshot();
});

it('renders input field with set width and height', () => {
  const inputField = renderer.create(
    <InputField
      width={100}
      height={20}
    />
  ).toJSON();
  expect(inputField).toMatchSnapshot();
});
