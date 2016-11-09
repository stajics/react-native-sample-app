import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// actions
import { setTitle } from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsButtonText: {
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    width: 120,
    height: 35,
    borderColor: 'black',
    borderWidth: 1,
  },
});

const propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  setTitle: PropTypes.func,
};

const defaultProps = {
  text: 'Home',
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.setTitle('Home New Title');
  }

  render() {
    const { text, title } = this.props;
    return (
      <View style={styles.container}>
        <Text onPress={this.onPress}>Im the {text} component with title {title}</Text>
        <TouchableOpacity onPress={Actions.homeSettings}>
          <View style={styles.buttonContainer}>
            <Text style={styles.settingsButtonText}>SETTINGS</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

const stateToProps = state => ({
  title: state.home.title,
});

const dispatchToProps = dispatch => (
  bindActionCreators({
    setTitle,
  }, dispatch)
);

export default connect(stateToProps, dispatchToProps)(Home);
