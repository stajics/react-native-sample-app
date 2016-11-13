import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage,
  Text,
  LayoutAnimation,
} from 'react-native';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { Actions } from 'react-native-router-flux';
// components
import InputField from '../InputField.react';
import Button from '../Button.react';
// actions
import { login, fetchUser } from '../../containers/authentication/actions';

const propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  submitFailed: PropTypes.bool,
  error: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: -1,
    alignItems: 'center',
  },
  loginButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    width: 100,
    height: 35,
    borderColor: 'black',
    borderWidth: 1,
  },
  loginButtonText: {
    fontSize: 30,
  },
  errorMessageContainer: {
    height: 35,
    borderColor: 'transparent',
    borderWidth: 1,
  },
  errorMessageText: {
    color: 'red',
    fontSize: 20,
  },
});

const renderField = ({ input, name , meta }) => // eslint-disable-line
  <InputField
    placeholder={name}
    value={input.value}
    onChange={input.onChange}
    onBlur={input.onBlur}
    onFocus={input.onFocus}
    textInputStyle={meta.error && meta.touched ? { backgroundColor: 'red' } : {}}
  />;

const renderPasswordField = ({ input, name , meta }) => // eslint-disable-line
  <InputField
    placeholder={name}
    secureTextEntry
    value={input.value}
    onChange={input.onChange}
    onBlur={input.onBlur}
    onFocus={input.onFocus}
    textInputStyle={meta.error && meta.touched ? { backgroundColor: 'red' } : {}}
  />;

const submit = async (values, dispatch) => { // eslint-disable-line consistent-return, max-len
  try {
    const response = await login(values.username, values.password)(dispatch);
    if (response.error) throw response.payload.error;
    await AsyncStorage.setItem('authToken', response.payload.token);
    await fetchUser(response.payload.token)(dispatch);
    Actions.rootTabbar();
  } catch (err) {
    // Handle error
    throw new SubmissionError({ _error: err });
  }
};

export class LoginForm extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { handleSubmit, submitting, submitFailed, error } = this.props;
    return (
      <View style={styles.container}>
        <Field
          name="username"
          component={renderField}
        />
        <Field
          name="password"
          component={renderPasswordField}
        />
        <Button
          text={'LOGIN'}
          onPress={handleSubmit(submit)}
          isLoading={submitting}
          buttonContainerStyle={styles.loginButtonContainer}
          buttonTextStyle={styles.loginButtonText}
        />
        <View style={styles.errorMessageContainer}>
          {
            submitFailed && error ? <Text style={styles.errorMessageText}>BAD CREDENTIALS</Text>
            : null
          }
        </View>
      </View>
    );
  }
}
LoginForm.propTypes = propTypes;

const validate = (values, props) => {  // eslint-disable-line no-unused-vars
  const errors = {};
  if (!values.username) errors.username = 'username error';
  if (!values.password) errors.password = 'password error';
  return errors;
};

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);
