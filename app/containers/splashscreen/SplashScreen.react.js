import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// actions
import { fetchUser } from '../authentication/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const propTypes = {
  appTitle: PropTypes.string.isRequired,
  fetchUser: PropTypes.func,
};

const defaultProps = {
  appTitle: 'Sample App',
};

export class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      AsyncStorage.getItem('authToken').then((token) => {
        if (!token) return Actions.authentication();
        return this.props.fetchUser(token).then(() => {
          Actions.rootTabbar();
        });
      });
    }, 1500);
  }

  render() {
    const { appTitle } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{appTitle}</Text>
        <Image
          style={styles.logoImage}
          source={{ uri: 'http://image.flaticon.com/teams/new/1-freepik.jpg' }}
        />
      </View>
    );
  }
}

SplashScreen.propTypes = propTypes;
SplashScreen.defaultProps = defaultProps;

const stateToProps = state => ({
  isLoggedIn: state.authentication.isLoggedIn,
});

const dispatchToProps = dispatch => (
  bindActionCreators({
    fetchUser,
  }, dispatch)
);

export default connect(stateToProps, dispatchToProps)(SplashScreen);
