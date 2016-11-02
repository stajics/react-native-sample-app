import React from 'react';
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

const MyComponent = () => (
  <View style={styles.container}>
    <Text>Im MyComponent</Text>
  </View>
);

export default MyComponent;
