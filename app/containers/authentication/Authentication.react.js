import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// actions
import { login as loginAction, fetchUser as fetchUserAction } from './actions';
// components
import InputField from '../../components/InputField.react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

const propTypes = {
  login: PropTypes.func,
  fetchUser: PropTypes.func,
  isLoginLoading: PropTypes.bool,
  isLoginError: PropTypes.object,
};

const defaultProps = {
  text: 'Authentication',
};

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.onPressLogin = this.onPressLogin.bind(this);
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
        {
          !isLoginLoading ? <Text onPress={this.onPressLogin}>LOGIN</Text>
          : <ActivityIndicator />
        }
        {
          isLoginError ? <Text>BAD CREDENTIALS</Text>
          : null
        }
        <InputField
          placeholder={'username'}
          onChange={event => this.setState({
            username: event.nativeEvent.text,
          })}
        />
        <InputField
          placeholder={'password'}
          onChange={event => this.setState({
            password: event.nativeEvent.text,
          })}
        />
      </View>
    );
  }
}

Authentication.propTypes = propTypes;
Authentication.defaultProps = defaultProps;

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

export default connect(stateToProps, dispatchToProps)(Authentication);
