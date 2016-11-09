import React, { Component } from 'react';
import { BackAndroid, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Router, Actions } from 'react-native-router-flux';
import scenes from './scenes';

const RouterWithRedux = connect()(Router);

// const propTypes = {
//   isLoggedIn: PropTypes.bool,
// };

class AppRoot extends Component {
  constructor(props) {
    super(props);
    BackAndroid.addEventListener('hardwareBackPress', () => Actions.pop()); // Handle back button press
  }

  render() {
    return (
      <View // For correctly hiding and showing keyboard
        style={{ flex: 1 }}
        onStartShouldSetResponderCapture={(e) => {
          const focusField = TextInput.State.currentlyFocusedField();
          if (focusField != null && e.nativeEvent.target !== focusField) {
            TextInput.State.blurTextInput(TextInput.State.currentlyFocusedField());
          }
        }}
      >
        <RouterWithRedux scenes={scenes} />
      </View>
    );
  }
}

// AppRoot.propTypes = propTypes;

// const stateToProps = state => ({
//   isLoggedIn: state.authentication.isLoggedIn,
// });

// export default connect(stateToProps, { })(AppRoot);
export default AppRoot;
