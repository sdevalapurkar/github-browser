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
                <View key={i}>
                    <Text>{names.name}</Text>
                    <Text>{names.full_name}</Text>        
                </View>
            );
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={{flex: 1, paddingTop: 80}}>
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
