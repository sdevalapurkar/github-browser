'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showProgress: false,
    };
  }

  state = {

  };

  render() {
    return(
      <View style = {styles.container} >

        <Image style = {styles.logo}
          source = {{ uri: "Octocat" }}
        />

        <Text style = {styles.heading}>
          Github Browser
        </Text>

        <TextInput
          onChangeText = {(text) => this.setState({username: text})} //on change in text, it takes in some text and logs it
          style = {styles.input}
          placeholder = "Github Username"
        />

        <TextInput
          onChangeText = {(text) => this.setState({password: text})}
          style = {styles.input}
          placeholder = "Github Password"
          secureTextEntry = {true}
        />

        <TouchableHighlight
          onPress = {this.onSigninPressed.bind(this)}
          style = {styles.button} >
            <Text style = {styles.buttonText}>
              Sign In
            </Text>
        </TouchableHighlight>

        <ActivityIndicator
          animating = {this.state.showProgress}
          size = "large"
          style = {styles.progressloader}
        />

      </View>
    );
  }

  onSigninPressed = () => {
    console.log('Signing in with username' + this.state.username);
    this.setState({showProgress: true});
  }

}

//set the style and light blue background for the entire view
var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1, //ask the container to occupy space
    paddingTop: 40,
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 66,
    height: 55,
  },
  heading: {
    fontSize: 30,
    marginTop: 10,
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48bbec',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    alignSelf: 'center'
  },
  progressloader: {
    marginTop: 20,
  }
})

module.exports = Login;
