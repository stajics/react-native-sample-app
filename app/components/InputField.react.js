import React from 'react';
import {
  View, TextInput, StyleSheet,
} from 'react-native';

const propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  containerStyle: React.PropTypes.object,
  textInputStyle: React.PropTypes.object,
};

const styles = StyleSheet.create({
  defaultDimensions: {
    width: 400,
    height: 30,
  },
  defaultMargines: {
    marginLeft: 10,
    marginRight: 10,
  },
  defaultBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  container: {
    flexDirection: 'row',
  },
  defaultColor: {
    backgroundColor: 'white',
  },
  textInput: {
    flex: -1,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
});

const InputField = ({ containerStyle, textInputStyle, width, height, ...otherProps }) => {
  const dimensions = (width && height) ? { width, height } : styles.defaultDimensions;
  return (
    <View
      style={[styles.defaultBorder,
        styles.defaultMargines,
        containerStyle,
        styles.container]}
    >
      <TextInput
        {...otherProps}
        style={[styles.defaultColor, dimensions, textInputStyle, styles.textInput]}
      />
    </View>
  );
};

InputField.propTypes = propTypes;

export default InputField;
