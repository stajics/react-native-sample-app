import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// actions
import { setTitle } from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  setTitle: PropTypes.func,
};

const defaultProps = {
  text: 'Settings',
};

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.setTitle('Settings New Title');
  }

  render() {
    const { text, title } = this.props;
    return (
      <View style={styles.container}>
        <Text onPress={this.onPress}>Im the {text} component with title {title}</Text>
      </View>
    );
  }
}

Settings.propTypes = propTypes;
Settings.defaultProps = defaultProps;

const stateToProps = state => ({
  title: state.settings.title,
});

const dispatchToProps = dispatch => (
  bindActionCreators({
    setTitle,
  }, dispatch)
);

export default connect(stateToProps, dispatchToProps)(Settings);
