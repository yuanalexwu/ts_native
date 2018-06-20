import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';
import Main from './src/main'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar hidden />
          <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
