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
var PushPayload = require('./PushPayload.js');

class Feed extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: ds,
      showProgress: true
    };
  }

  componentDidMount() {
    this.fetchFeed();
  }

  fetchFeed() {
    require('./AuthService').getAuthInfo((err, authInfo) => {
      var url = 'https://api.github.com/users/'
        + authInfo.user.login
        + '/events/public';

      fetch(url, { headers: authInfo.header })
      .then((response) => response.json())
      .then((responseData) => {
        var feedItems =
          responseData.filter((ev) =>
            ev.type == 'PushEvent');

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(feedItems),
          showProgress: false
        });
      })
    });
  }

  pressRow(rowData) {
    this.props.navigator.push({
      title: 'Push Event',
      component: PushPayload,
      passProps: {
        pushEvent: rowData
      }
    });
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight
        onPress={()=> this.pressRow(rowData)}
        underlayColor='#ddd'
      >

      <View style={{
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderColor: '#D7D7D7',
        borderBottomWidth: 1
      }}>
        <Image
          source={{uri: rowData.actor.avatar_url}}
          style = {{
            height: 36,
            width: 36,
            borderRadius: 18
          }}
        />

        <View style = {{
          paddingLeft: 20
        }}>

          <Text style = {{backgroundColor: '#F5FCFF'}}>
            {moment(rowData.created_at).fromNow()}
          </Text>
          <Text style = {{backgroundColor: '#F5FCFF'}}>
            <Text 
              style={{ fontWeight: 'bold' }}
            >
              {rowData.actor.login}
            </Text> 
             ->pushed to
          </Text>
          <Text style = {{backgroundColor: '#F5FCFF'}}>
            {rowData.payload.ref.replace('refs/heads/', '')}
          </Text>
          <Text style = {{backgroundColor: '#F5FCFF'}}>
            at-> 
            <Text 
              style = {{ fontWeight: 'bold' }}
            > 
              {rowData.repo.name}
            </Text>
          </Text>

        </View>
      </View >
    </TouchableHighlight>
    );
  }

  state = {

  };

  render() {
    if(this.state.showProgress) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator
            size = "large"
            animating = {true} 
          />
        </View>
      );
    }

    return (
      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
      }}>
        <ListView style={{
          marginTop: 60,
        }}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
}

module.exports = Feed;
