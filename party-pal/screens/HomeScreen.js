import React from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _onPressButton() {
    Alert.alert('help is on the way')
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress = {this._onPressButton}
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>h e l p</Text>
          </TouchableOpacity>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    alignItems: 'center',
    flexGrow: 0.3,
    justifyContent: 'center',
    backgroundColor: '#e74c3c'
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20
  }

});
