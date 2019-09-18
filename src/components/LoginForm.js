import React, { Component } from 'react';
import { TextInput, AsyncStorage, View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Spinner, SignupButton } from '../ortak';

class LoginForm extends Component {
    state = { email: '', password: '', loading: false };  
  
    componentWillMount() {
        AsyncStorage.getItem('user_created')
        .then(req => JSON.parse(req))
        .then(json => {
            if (json !== null) {
                  // Direk Anasayfaya yönlendir
                      Actions.menu({ type: 'reset' });

                  // localdeki bilgiler ile servise çık
                 const email = json[0];
                 const password = json[1];
               
                 this.props.loginUser({ email, password });
            } else {
               this.setState({ islogin: false });
            }
        }).done();
}    
  
        
    clickLogin() {
        console.log('clickLogin');
       const { email, password } = this.props;
       this.props.loginUser({ email, password });
    }
    clickSignup() {
      console.log('clickSignup');
      Actions.signupForm();
    }
    signupButton() {       
            return <SignupButton onPress={this.clickSignup.bind(this)}>ÜYE OL</SignupButton>;      
    }
    
    renderButton() {
        console.log('renderButton');
        if (!this.props.loading) {
            return <Button onPress={this.clickLogin.bind(this)}>GİRİŞ</Button>;
        }
        return <Spinner size='small' />;
    }   

    
    render() {    
             
        const screenWidth = Math.round(Dimensions.get('window').width);
        console.log(screenWidth);
       console.log('render')
        const { inputStyle } = styles;
        return (
         
            <View style={{ flex: 1, backgroundColor: "#384065" }}>
            
            <View style={{marginTop: 10 }}>
                    <Text style={styles.kelime}>Kelime</Text>
                    <Text style={styles.ogren}>Öğren</Text>
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

                    {this.signupButton()}
              
            </View>
            </View>
       
        );
        }

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
             marginBottom: 20,         
             backgroundColor: 'rgba(255, 255, 255, 0.3)',
             borderBottomColor: '#f8f8f8',
             borderBottomWidth: 1
         },
         kelime: {           
            alignSelf: 'center',
            fontSize: 60,
            color: 'red',
            fontFamily: 'times'
         },
         ogren: {
            alignSelf: 'center', 
            fontSize: 60, 
            color: 'red', 
            fontFamily: 'times'
         },
         mainbody: {
            marginTop: 30,
            marginLeft: 24,
            marginRight: 24,
            marginBottom: 70
        },
        baslik: {
            marginLeft: 100,
            marginTop: 50,
            height: 120,
            width: 120
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
        { emailChanged, passwordChanged, loginUser })(LoginForm);
