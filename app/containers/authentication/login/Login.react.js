import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// actions
import { login as loginAction, fetchUser as fetchUserAction } from '../actions';
// components
import LoginForm from '../../../components/forms/LoginForm.react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    marginBottom: 70,
    fontWeight: 'bold',
  },
});

const propTypes = {
};

const defaultProps = {
  text: 'Login',
};

export class Login extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sample App</Text>
        <LoginForm />
      </View>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

const stateToProps = state => ({
  title: state.home.title,
});

const dispatchToProps = dispatch => (
  bindActionCreators({
    login: loginAction,
    fetchUser: fetchUserAction,
  }, dispatch)
);

export default connect(stateToProps, dispatchToProps)(Login);
