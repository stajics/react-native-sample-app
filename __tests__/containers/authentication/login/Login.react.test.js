import 'react-native';
import React from 'react';
import { Login } from '../../../../app/containers/authentication/login/Login.react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'; // eslint-disable-line

it('renders correctly', () => {
  const login = renderer.create(
    <Login />
  ).toJSON();
  expect(login).toMatchSnapshot();
});

it('renders when login button is loading', () => {
  const login = renderer.create(
    <Login
      isLoginLoading
    />
  ).toJSON();
  expect(login).toMatchSnapshot();
});

it('renders when login errors for bad credentials', () => {
  const login = renderer.create(
    <Login
      isLoginError={{}}
    />
  ).toJSON();
  expect(login).toMatchSnapshot();
});
