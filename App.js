import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    // eslint-disable-next-line no-lone-blocks
    {
      firebase.initializeApp({

        apiKey: 'AIzaSyAUjWxXVsYT_sdVO7n5hBJJEyG9KYpqlKE',
        authDomain: 'learnenglish-da0c5.firebaseapp.com',
        databaseURL: 'https://learnenglish-da0c5.firebaseio.com',
        projectId: 'learnenglish-da0c5',
        storageBucket: 'learnenglish-da0c5.appspot.com',
        messagingSenderId: '13022674140',
        appId: '1:13022674140:web:7398856807890bbf'
     
      });     
    }
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <View style={{ flex: 1 }}>        
        <Router />
      </View>
      </Provider>
    );
  }  
  }

export default App;