import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

class SearchResults extends Component {
    constructor(props) {
      super(props);
    }

    returnItems() {
        return this.props.items.map(function(names, i) {
            return (
                <View style={{marginLeft: 10, paddingTop: 10}} key={i}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', paddingBottom: 5}}>{names.name}</Text>
                    <Text style={{fontSize: 14}}>{names.full_name}</Text>        
                </View>
            );
        });
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#F5FCFF'}}>
                <View style={{flex: 1, paddingTop: 10}}>
                    <Text style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold'}}>Total Repositories</Text>
                    <Text style={{textAlign: 'center', fontSize: 18}}>{this.props.totalCount}</Text>

                    <View>
                        {this.returnItems()}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default SearchResults;
