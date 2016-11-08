import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Im the { this.props.text } component</Text>
      </View>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

const stateToProps = state => ({
  someProp: state.someProp,
});

const dispatchToProps = dispatch => (
  bindActionCreators({
    // login: loginAction,
   // getUser: getUserAction,
  }, dispatch)
);

export default connect(stateToProps, dispatchToProps)(MyComponent);
