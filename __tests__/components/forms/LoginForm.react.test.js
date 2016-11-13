import 'react-native';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import LoginForm from '../../../app/components/forms/LoginForm.react'; // eslint-disable-line
const store = createStore(() => ({}));
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'; // eslint-disable-line

it('renders correctly', () => {
  const loginForm = renderer.create(
    <Provider store={store}>
      <LoginForm handleSubmit={jest.fn} />
    </Provider>
  ).toJSON();
  expect(loginForm).toMatchSnapshot();
});
