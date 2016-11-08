import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// actions
import { login as loginAction, getUser as getUserAction } from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

const propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  setTitle: PropTypes.func,
  login: PropTypes.func,
  getUser: PropTypes.func,
};

const defaultProps = {
  text: 'Authentication',
};

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.onPressLogin = this.onPressLogin.bind(this);
  }

  onPress() {
    this.props.setTitle('Authentication New Title');
  }

  async onPressLogin() {
    try {
      const { login, getUser } = this.props;
      const response = await login('user1', 'pw');
      if (response.status >= 200 && response.status < 300) {
        await AsyncStorage.setItem('authToken', response.body.token);
        const user = await getUser(response.body.token);
        await AsyncStorage.setItem('userId', user.response.id);
        Actions.rootTabbar();
      } else {
        throw new Error('Something went wrong.');
      }
    } catch (err) {
    // TODO Handle error
    }
  }

  render() {
    const { text, title } = this.props;
    return (
      <View style={styles.container}>
        <Text onPress={this.onPress}>Im the {text} component with title {title}</Text>
        <Text onPress={this.onPressLogin}>LOGIN</Text>
      </View>
    );
  }
}

Authentication.propTypes = propTypes;
Authentication.defaultProps = defaultProps;

const stateToProps = state => ({
  title: state.home.title,
});

export default connect(stateToProps, { login: loginAction, getUser: getUserAction })(Authentication);
