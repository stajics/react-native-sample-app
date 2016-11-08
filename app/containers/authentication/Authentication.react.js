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
};

const defaultProps = {
  text: 'Authentication',
};

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.onPressLogin = this.onPressLogin.bind(this);
  }

  async onPressLogin() {
    try {
      const { login, fetchUser } = this.props;
      const response = await login('user1', 'pw');
      await AsyncStorage.setItem('authToken', response.payload.token);
      await fetchUser(response.payload.token);
      Actions.rootTabbar();
    } catch (err) {
      // Handle error
    }
  }

  render() {
    const { isLoginLoading } = this.props;
    return (
      <View style={styles.container}>
        {
          !isLoginLoading ? <Text onPress={this.onPressLogin}>LOGIN</Text>
          : <ActivityIndicator />
        }
      </View>
    );
  }
}

Authentication.propTypes = propTypes;
Authentication.defaultProps = defaultProps;

const stateToProps = state => ({
  title: state.home.title,
  isLoginLoading: state.flags.isLoading.login,
});

const dispatchToProps = dispatch => (
  bindActionCreators({
    login: loginAction,
    fetchUser: fetchUserAction,
  }, dispatch)
);

export default connect(stateToProps, dispatchToProps)(Authentication);
