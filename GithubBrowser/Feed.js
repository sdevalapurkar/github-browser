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
  TabBarIOS,
  ListView
} from 'react-native';

var buffer = require('buffer');

class Feed extends Component
{
  constructor(props)
  {
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state =
    {
      dataSource: ds.cloneWithRows(['A', 'B', 'C'])
    };
  }

  state =
  {

  };

  renderRow(rowData)
  {
    return <Text style = {{
      color: '#333',
      backgroundColor: '#fff',
      alignSelf: 'center'
    }} >
      {rowData}
    </Text>
  }

  render()
  {
    return(
      <View style = {{
        flex: 1,
        justifyContent: 'flex-start'
      }}
      >
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this.renderRow.bind(this)} />
      </View>
    );
  }
}

module.exports = Feed;
