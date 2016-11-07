import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MyComponent = ({ title }) => (
  <View style={styles.container}>
    <Text>Im MyComponent { title }</Text>
  </View>
);

MyComponent.propTypes = propTypes;

export default MyComponent;
