import 'react-native';
import React from 'react';
import { Login } from '../../../../app/containers/authentication/login/Login.react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'; // eslint-disable-line

jest.mock('../../../../app/components/forms/LoginForm.react', () => 'LoginForm');

it('renders correctly', () => {
  const login = renderer.create(
    <Login />
  ).toJSON();
  expect(login).toMatchSnapshot();
});
