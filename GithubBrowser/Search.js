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
import RenderIf from './RenderIf.js';
import SearchResults from './SearchResults.js';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalCount: undefined,
      searchQuery: ''
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput
          onChangeText = {(text) => this.setState({searchQuery: text})}
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

        {RenderIf(this.state.totalCount === 0, 
          <View style={{paddingTop: 10}}>
            <Text style={{color: 'red', fontSize: 14, fontWeight: 'bold'}}>
              Sorry no repositories exist by that name :(
            </Text>
          </View>
        )}

      </View>
    );
  }

  onSearchPressed = () => {
    fetch("https://api.github.com/search/repositories?q=" + this.state.searchQuery)
    .then((response) => {
      return response;
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      this.setState({ totalCount: result.total_count, items: result.items });

      if(this.state.totalCount !== 0 && this.state.totalCount !== undefined) {
        this.props.navigator.push({
          title: 'Results',
          component: SearchResults,
          passProps: { searchQuery: this.state.searchQuery, totalCount: this.state.totalCount, items: this.state.items }
        });
      }
    });
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
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
