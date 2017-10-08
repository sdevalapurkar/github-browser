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
        console.log(this.props.searchQuery);

        return (
            <ScrollView 
                contentInset={{top:0}}
                automaticallyAdjustContentInsets={false} 
                style={{backgroundColor: '#F5FCFF'}}
            >
                <View style={{flex: 1, paddingTop: 20}}>
                    <Text style={{textAlign: 'center', fontSize: 26}}>{this.props.searchQuery}</Text>
                    <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', paddingTop: 10}}>Total Repositories</Text>
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
