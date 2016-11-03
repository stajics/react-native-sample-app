import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// components
import Home from './home/Home.react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const propTypes = {
  text: PropTypes.string.isRequired,
  // url: PropTypes.string.isRequired,
};

const defaultProps = {
  text: 'Hello World',
};

class AppRoot extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

AppRoot.propTypes = propTypes;
AppRoot.defaultProps = defaultProps;

const stateToProps = state => ({
  someProp: state.someProp,
});

const dispatchToProps = dispatch => bindActionCreators({
  // someAction,
}, dispatch);


export default connect(stateToProps, dispatchToProps)(AppRoot);
