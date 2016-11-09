import React, { PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  tabIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});

const TabIcon = ({ selected, title }) => (
  <View style={[styles.tabIconContainer, { backgroundColor: selected ? 'gray' : 'white' }]}>
    <Text style={{ color: selected ? 'white' : 'black' }}>{title}</Text>
  </View>
);

TabIcon.propTypes = propTypes;

export default TabIcon;
