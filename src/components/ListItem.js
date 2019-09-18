import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '../ortak';


class ListItem extends Component {
  
    wordClick() {
        Actions.wordUpdate({ word: this.props.kelime });
    }

    render() {
        const { kelimeTurkce } = this.props.kelime;
        return (
            <TouchableWithoutFeedback onPress={this.wordClick.bind(this)}>
            <View>
                <CardSection>
                    <Text>
                     {kelimeTurkce} 
                    </Text>
                </CardSection>
            </View>
            </TouchableWithoutFeedback>
           
        );
    }
};

export default ListItem;