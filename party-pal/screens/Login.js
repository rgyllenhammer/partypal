import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import LoginForm from "../components/LoginForm";

export default class Login extends React.Component {

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style = {styles.logoContainer}>
            <Image
              style = {styles.logo}
              source = {require('../assets/images/icon.png')}
              />
              <Text style ={styles.title}>
                Party Pal
              </Text>
          </View>
          <View style={styles.formContainer}>
          <LoginForm/>
          </View>
      </KeyboardAvoidingView>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo:{
    width:100,
    height:100
  },
  title:{
    color: '#FFF',
    marginTop: 10,
    textAlign: 'center'

  }
})
