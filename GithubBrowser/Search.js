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

class Search extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {

    }
  }

  state =
  {

  };

  render()
  {
    return(
      <View style = {styles.container} >
        <TextInput
          onChangeText = {(text) => this.setState({searchQuery: text})} //on change in text, it takes in some text and logs it
          style = {styles.input}
          placeholder = "Search Query"
        />

        <TouchableHighlight
          onPress = {this.onSearchPressed.bind(this)}
          style = {styles.button} >
            <Text style = {styles.buttonText}>
              Search
            </Text>
        </TouchableHighlight>

      </View>
    );
  }

  onSearchPressed = () =>
  {

  }
}

//set the style and light blue background for the entire view
var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1, //ask the container to occupy space
    paddingTop: 100,
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
})

module.exports = Search;
