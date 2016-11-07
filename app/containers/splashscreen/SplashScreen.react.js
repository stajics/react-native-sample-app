import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// actions
// import { setTitle } from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  appTitle: PropTypes.string.isRequired,
};

const defaultProps = {
  appTitle: 'Sample App',
};

class SplashScreen extends Component {
  componentDidMount() {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      setTimeout(() => { Actions.auth({ type: 'replace' }); }, 2000);
    }
  }

  render() {
    const { appTitle } = this.props;
    return (
      <View style={styles.container}>
        <Text>{appTitle}</Text>
        <Image
          style={{ width: 200, height: 200 }}
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

export default connect(stateToProps, {})(SplashScreen);
