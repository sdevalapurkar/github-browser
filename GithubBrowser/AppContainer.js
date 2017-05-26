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

var buffer = require('buffer');

class AppContainer extends Component
{
  constructor(props)
  {
    super(props);

    this.state =
    {

    };
  }

  state =
  {

  };

  render()
  {
    return(
      <View style = {styles.container} >
        <Text style = {styles.welcome} > Tabs coming soon </Text>
      </View>
    );
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
});

module.exports = AppContainer;
