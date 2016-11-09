import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// actions
import { setTitle } from './actions';
import { logout as logoutAction } from '../authentication/actions';

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
  logout: PropTypes.func,
};

const defaultProps = {
  text: 'Profile',
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.onPressLogout = this.onPressLogout.bind(this);
  }

  onPress() {
    this.props.setTitle('New Profile Title');
  }

  async onPressLogout() {
    const { logout } = this.props;
    logout();
    await AsyncStorage.multiRemove(['authToken']);
    Actions.authentication();
  }

  render() {
    const { text, title } = this.props;
    return (
      <View style={styles.container}>
        <Text onPress={this.onPress}>Im the {text} component with title {title}</Text>
        <Text onPress={Actions.profileSettings}>SETTINGS</Text>
        <Text onPress={this.onPressLogout}>LOGOUT</Text>
      </View>
    );
  }
}

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

const stateToProps = state => ({
  title: state.profile.title,
});

const dispatchToProps = dispatch => (
  bindActionCreators({
    setTitle,
    logout: logoutAction,
  }, dispatch)
);

export default connect(stateToProps, dispatchToProps)(Profile);
