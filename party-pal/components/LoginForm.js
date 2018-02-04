import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  StatusBar

} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import RootNavigation from '../navigation/RootNavigation';
import HomeScreen from '../screens/HomeScreen';

export default class LoginForm extends React.Component {
  state = {
    isSubmit: false,
  };

  _onPressButton = () => {
    this.setState({isSubmit: true});
  }

  render() {
      if(!this.state.isSubmit){
        return(
        <View style={styles.container}>
          <TextInput
            placeholder="username or email"
            placeholderTextColor= 'rgba(255,255,255,0.7)'
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType = "email-address"
            style={styles.input}
            />
            <TextInput
            placeholder ="password"
            placeholderTextColor= 'rgba(255,255,255,0.7)'
            secureTextEntry
            style={styles.input}
            ref ={(input) => this.passwordInput = input}
            />

            <TouchableOpacity onPress = {this._onPressButton}
            style = {styles.buttonContainer}>
            <Text style = {styles.buttonText}>LOGIN</Text>

            </TouchableOpacity>
            </View>
      );
      }else{
        //this.props.navigator.push({
          //component:HomeScreen
        return(
          <View style={styles.home}>

              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
            <RootNavigation />
          </View>
        );
      }
  }


}

const styles = StyleSheet.create({
  container: {

  },
  home:{
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }

})
