import React from 'react';
import { Text,View, ScrollView, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
//import { ExpoLinksView } from '@expo/samples';

export default class SettingScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
   super(props);
   this.state = { text: '' };
 }

 handleChangeText = (typedText) => {
   this.setState({text: typedText})
 }

  searchPressed() {
    Alert.alert(this.state.text + " Recorded.")
    fetch('https://9d161428.ngrok.io/num', {
      method: 'POST',
      //headers: {
        //Accept: 'application/json',
        //'Content-Type': 'application/json',
      //},
      body: JSON.stringify({
        //num: this.state.text,
        num: 5,
      }),
  });
}

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <View style={styles.searchSection}>
        <TextInput style={styles.contactText}
          placeholder = 'Enter phone number of contact'
          onChangeText={this.handleChangeText}
          returnKeyType = 'done'
          //onSubmitEditing={this._onSubmit(this.state.text)}
        />
        <TouchableOpacity onPress={ () => this.searchPressed() }
          style = {styles.searchButton}>
          <Text>Enter</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  searchSection: {
    flexDirection: 'row',
    padding: 5,
    height: 30
  },
  contactText: {
    flex: 0.7
  },
  searchButton: {
    flex: 0.3
  }
});
