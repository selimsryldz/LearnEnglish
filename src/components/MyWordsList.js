import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { myWordsListData } from '../actions';
import ListItem from './ListItem';


class MyWordsList extends Component {

       componentWillMount() {
        this.props.myWordsListData();
        this.createDataSource(this.props);
    }
     componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
     }
     createDataSource({ wordsArray }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(wordsArray);
     }
     renderRow(kelime)
     {
         return <ListItem kelime={kelime} />;
     }
    render() {
       
        return (
            <View style={{ flex: 1, backgroundColor: "#384065" }}>
               
                <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                />

            </View>
        );
    }

    
}

const mapStateToProps = ({ wordDataResponse }) => {
    const wordsArray = _.map(wordDataResponse, (val, uid) => {
        return { ...val, uid };
    });
    return { wordsArray };

};

export default connect(mapStateToProps, { myWordsListData })(MyWordsList);