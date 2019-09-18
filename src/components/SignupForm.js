import React, { Component } from 'react';
import { TextInput, Alert, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { emailChanged, passwordChanged, loginUser, signupUser } from '../actions';
import { Button, Card, CardSection, Spinner } from '../ortak';


class LoginForm extends Component {
    state ={ email: '', password: '', loading: false };
    clickSignup() {
        console.log('clickSignup');
       const { email, password } = this.props;
       this.props.signupUser({ email, password });
    }
  
    
    renderButton() {
        console.log('renderButton');
        if (!this.props.loading) {
            return <Button onPress={this.clickSignup.bind(this)}>Üye Ol</Button>;
        }
        return <Spinner size='small' />;
    }

    
    render() {
       console.log('render')
        const { inputStyle } = styles;
        return (
         
            <View style={{ flex: 1, backgroundColor: "#384065" }}>

            <View style={{ marginTop: 10 }}>
            <Text style={styles.baslik}>Kelime</Text>
            <Text style={styles.baslik}>Öğren</Text>
            </View>
           
         
            <View style={styles.mainbody}>
                    <TextInput 
                     placeholder="E-mail"
                     placeholderTextColor="#fff"
                     style={inputStyle}
                     value={this.props.email}
                     onChangeText={email => this.props.emailChanged(email)}

                    />
             
                    <TextInput 
                      secureTextEntry={true}
                      placeholder="Şifre"
                      placeholderTextColor="#fff"
                      style={inputStyle}
                      value={this.props.password}
                      onChangeText={password => this.props.passwordChanged(password)} 
                    />
    
                    {this.renderButton()}
               
              
            </View>
            </View>
       
        );
        }

        // eslint-disable-next-line react/sort-comp
       // eslint-disable-next-line react/sort-comp
       static navigationOptions = ({ navigation }) => {
        return {
           header: null,
           
        }
    }
        
    }

    const styles = {
      
         inputStyle: {
             color: '#fff',
             alignSelf: 'stretch',
             height: 50,
             marginBottom: 30,         
             backgroundColor: 'rgba(255, 255, 255, 0.3)',
             borderBottomColor: '#f8f8f8',
             borderBottomWidth: 1
            

         },
         mainbody: {
            marginTop: 30,
            marginLeft: 24,
            marginRight: 24,
            marginBottom: 70
        },
        baslik: {
            alignSelf: 'center',
            fontSize: 60,
            color: 'red',
            fontFamily: 'times' 
        },

    };

    const mapToStateProps = ({ kimlikdogrulamaResponse }) => {
        const { email, password, loading } = kimlikdogrulamaResponse;
        return {
            email,
            password,
            loading 
        };
    };
   
    export default connect(mapToStateProps, 
        { emailChanged, passwordChanged, loginUser, signupUser })(LoginForm);
