import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// actions
import { setTitle } from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

const propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  setTitle: PropTypes.func,
};

const defaultProps = {
  text: 'Profile',
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.setTitle('New Profile Title');
  }

  render() {
    const { text, title } = this.props;
    return (
      <View style={styles.container}>
        <Text onPress={this.onPress}>Im the {text} component with title {title}</Text>
        <Text onPress={Actions.profileSettings}>SETTINGS</Text>
      </View>
    );
  }
}

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

const stateToProps = state => ({
  title: state.profile.title,
});

export default connect(stateToProps, { setTitle })(Profile);
