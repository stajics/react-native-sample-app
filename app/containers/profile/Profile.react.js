import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    width: 120,
    height: 35,
    borderColor: 'black',
    borderWidth: 1,
  },
  logoutButtonText: {
    fontSize: 30,
  },
  settingsButtonText: {
    fontSize: 20,
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
        <TouchableOpacity onPress={Actions.profileSettings}>
          <View style={styles.buttonContainer}>
            <Text style={styles.settingsButtonText} >SETTINGS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressLogout}>
          <View style={styles.buttonContainer}>
            <Text style={styles.logoutButtonText} >LOGOUT</Text>
          </View>
        </TouchableOpacity>
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
