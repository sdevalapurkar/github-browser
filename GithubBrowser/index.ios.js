import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator
} from 'react-native';

var Login = require('./Login');
var AuthService = require('./AuthService');
var AppContainer = require('./AppContainer');

export default class GithubBrowser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };

    this.onLogin = this.onLogin.bind(this);
  }

  state = {

  };

  /*
  ASYNC STORAGE OF USER CREDENTIALS
  componentDidMount() {
    AuthService.getAuthInfo((err, authInfo) => {
      this.setState({
        checkingAuth: false,
        isLoggedIn: authInfo != null
      })
    });
  }
  */

  render() {
    if(this.state.checkingAuth) {
      return (
        <View style = {styles.container}>
          <ActivityIndicator
            animating = {true}
            size = "large"
            style = {styles.loader}
          />
        </View>
      )
    }

    if(this.state.isLoggedIn) {
      return(
        <AppContainer />
      );
    }
    else {
      return (
        <Login onLogin = {this.onLogin} />
      );
    }
  }

  onLogin() {
    this.setState({isLoggedIn: true});
  }

  getInitialState() {
    return {
      isLoggedIn: false,
      checkingAuth: true
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
