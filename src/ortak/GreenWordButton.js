import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const GreenWordButton = ({ onPress, children }) => {
    
  const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}> {children} </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
           
    },
    

    buttonStyle: {
        
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',        
        padding: 20,
        height: 250,
        backgroundColor: '#7BDA14',
        marginTop: 30,
        marginBottom: 100
    },
    
};

export { GreenWordButton };