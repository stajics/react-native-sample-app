import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// actions
import { setTitleBasicActionCreator } from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    this.props.setTitle('New Title');
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

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

const stateToProps = state => ({
  title: state.home.title,
});

// const dispatchToProps = dispatch => bindActionCreators({
//   setTitle,
// }, dispatch);

// const dispatchToProps = dispatch => ({
//   setTitle(title) {
//     dispatch(setTitleBasicActionCreator(title));
//   },
// });

export default connect(stateToProps, { setTitle: setTitleBasicActionCreator })(Home);
