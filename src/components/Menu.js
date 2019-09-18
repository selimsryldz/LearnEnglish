import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Button, SignupButton } from '../ortak';


class Menu extends Component {
   
    showMyWords() {
        console.log('showMyWords');
        Actions.myWordsList();
     }

     studyAllWords() {
        console.log('studyAllWords');
        Actions.wordsStudy();
     }
     logout() {
        AsyncStorage.setItem('user_created', JSON.stringify(null));
        Actions.loginScreen({ type: 'reset' });
     }
     studyMyWords() {
        console.log('studyMyWords');
        Actions.myWordsStudy();
     }
     show2MyWords() {
        console.log('studyMyWords');
        Actions.myWordsShow();
     }
     closeApp() {
        BackHandler.exitApp();
     }


    render() {
        const { currentUser } = firebase.auth();
        let islem = 1;
        islem = 2;
        
            console.log(islem);
        console.log(currentUser);
        return (
            
           
            <View style={{ flex: 1, backgroundColor: "#384065" }}>

            <View style={{marginTop: 10 }}>
            <Text style={styles.kelime}>Kelime</Text>
            <Text style={styles.ogren}>Öğren</Text>
            </View>
            
            <View style={styles.mainbody}>

            <Button onPress={this.showMyWords.bind(this)}>Kelimelerim</Button>           

            <Button onPress={this.studyAllWords.bind(this)}>Kelimelere Çalış</Button>

            <Button onPress={this.show2MyWords.bind(this)}>Kelimelerime Çalış</Button>

            <Button onPress={this.studyMyWords.bind(this)}>Test Yap</Button>

            <TouchableOpacity onPress={this.logout.bind(this)} style={styles.buttonStyle}>
             <Text style={styles.textStyle} > Oturumu Kapat </Text>
             </TouchableOpacity>
            
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
             marginBottom: 30,         
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
            marginTop: 20,
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
        container: {
            
            flexDirection: 'row',
            justifyContent: 'space-between'
          },
        
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
        },
        
        buttonStyle2: {
            
            alignSelf: 'stretch',
            alignItems: 'center',
            width: '45%',
            padding: 20,
            backgroundColor: '#CF1111',
            marginTop: 20
        }

    };

    export default Menu;