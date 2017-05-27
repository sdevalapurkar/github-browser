'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  View,
  ListView,
  ActivityIndicator,
  Image,
  TouchableHighlight,
} from 'react-native';

var buffer = require('buffer');
var moment = require('moment');

class PushPayload extends Component
{
  constructor(props)
  {
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: ds
    };
  }

  state = {

  };

  render() {
    return(
      <View style={{
        flex: 1,
        paddingTop: 80,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
        alignItems: 'center'
      }}>
        <Text>
          Hello There
        </Text>
      </View>
    );
  }
}

module.exports = PushPayload;
