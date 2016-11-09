import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
  LayoutAnimation,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// actions
import { login as loginAction, fetchUser as fetchUserAction } from '../actions';
// components
import InputField from '../../../components/InputField.react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
  loginButton: {
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
  title: {
    fontSize: 40,
    marginBottom: 70,
    fontWeight: 'bold',
  },
});

const propTypes = {
  login: PropTypes.func,
  fetchUser: PropTypes.func,
  isLoginLoading: PropTypes.bool,
  isLoginError: PropTypes.object,
};

const defaultProps = {
  text: 'Login',
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.onPressLogin = this.onPressLogin.bind(this);
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  async onPressLogin() {
    try {
      const { username, password } = this.state;
      const { login, fetchUser } = this.props;
      const response = await login(username, password);
      await AsyncStorage.setItem('authToken', response.payload.token);
      await fetchUser(response.payload.token);
      Actions.rootTabbar();
    } catch (err) {
      // Handle error
    }
  }

  render() {
    const { isLoginLoading, isLoginError } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sample App</Text>
        <InputField
          placeholder={'username'}
          onChange={event => this.setState({
            username: event.nativeEvent.text,
          })}
        />
        <InputField
          placeholder={'password'}
          secureTextEntry
          onChange={event => this.setState({
            password: event.nativeEvent.text,
          })}
        />
        <View style={styles.loginButtonContainer}>
          {
            !isLoginLoading
            ? <Text style={styles.loginButton} onPress={this.onPressLogin}>LOGIN</Text>
            : <ActivityIndicator style={{ alignItems: 'center', justifyContent: 'center' }} />
          }
        </View>
        <View style={styles.errorMessageContainer}>
          {
            isLoginError ? <Text style={styles.errorMessageText}>BAD CREDENTIALS</Text>
            : null
          }
        </View>
      </View>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

const stateToProps = state => ({
  title: state.home.title,
  isLoginLoading: state.flags.isLoading.login,
  isLoginError: state.flags.error.login,
});

const dispatchToProps = dispatch => (
  bindActionCreators({
    login: loginAction,
    fetchUser: fetchUserAction,
  }, dispatch)
);

export default connect(stateToProps, dispatchToProps)(Login);
