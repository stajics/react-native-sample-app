import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

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
  constructor() {
    super();
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

export default MyComponent;
