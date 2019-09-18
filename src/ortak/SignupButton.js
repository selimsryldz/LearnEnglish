import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const SignupButton = ({ onPress, children }) => {
    
  const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}> {children} </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12     
    },
    buttonStyle: {
        
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#CF1111',
        marginTop: 20
    }
};

export { SignupButton };