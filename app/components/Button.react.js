import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool,
  buttonContainerStyle: View.propTypes.style,
  buttonTextStyle: Text.propTypes.style,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    width: 100,
    height: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    fontSize: 15,
  },
});

const Button = ({ text, onPress, isLoading, buttonContainerStyle, buttonTextStyle }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.container, buttonContainerStyle]}>
      {
        !isLoading
        ? <Text style={[styles.text, buttonTextStyle]}>{text}</Text>
        : <ActivityIndicator style={{ alignItems: 'center', justifyContent: 'center' }} />
      }
    </View>
  </TouchableOpacity>
);

Button.propTypes = propTypes;

export default Button;
