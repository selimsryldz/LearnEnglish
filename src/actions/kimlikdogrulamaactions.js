import { Alert, AsyncStorage  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS } from './types';

export const emailChanged = (email) => {
  return (dispatch) => {
    dispatch({
      type: EMAIL_CHANGED,
      payload: email
    });
  };
};

export const passwordChanged = (password) => {
  return (dispatch) => {
    dispatch({
      type: PASSWORD_CHANGED,
      payload: password
    });
  };
};


export const loginUser = ({ email, password }) => {
  console.log(email);
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    if (email === '' || password === '') {
      Alert.alert(
        'Mesaj',
        'Her iki alanda Dolu olmalı!',
        [
          { text: 'Tamam', onPress: () => null }
        ]
      );
      dispatch({
        type: LOGIN_USER_FAIL
      });
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginSuccess(dispatch, user), saveAuth(email, password))
        .catch(() => {
         loginFail(dispatch);
        });
    }
  };
}

export const signupUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_USER });
    if (email === '' || password === '') {
      Alert.alert(
        'Mesaj',
        'Tüm alanlar dolu olmalı!',
        [
          { text: 'Tamam', onPress: () => null }
        ]
      );
      dispatch({
        type: SIGNUP_USER_FAIL
      });
}

  else {
    firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => signupSuccess(dispatch, user))
        .catch((error) => {    
         
          if (error.code === 'auth/weak-password') {
            Alert.alert(
              'Mesaj',
              'Lütfen en az 6 karakterden oluşan bir parola giriniz!',
              [
                { text: 'Tamam', onPress: () => null }
              ]
            );
          } 
          else if (error.code === 'auth/email-already-in-use') {
            Alert.alert(
              'Mesaj',
              'Bu E-Mail kullanılmaktadır!',
              [
                { text: 'Tamam', onPress: () => null }
              ]
            );
          }
          else if (error.code === 'auth/invalid-email') {
            Alert.alert(
              'Mesaj',
              'Lütfen geçerli bir E-Mail giriniz!',
              [
                { text: 'Tamam', onPress: () => null }
              ]
            );
          }
          else if (error.code === 'auth/operation-not-allowed') {
            Alert.alert(
              'Mesaj',
              error.message,
              [
                { text: 'Tamam', onPress: () => null }
              ]
            );
          }
         
          /*     switch (error.code) {
              case 'auth/email-already-in-use':
                console.log('switch');
                  Alert.alert(
                    'Mesaj',
                    'Bu email kullanılmaktadır!',
                    [
                      { text: 'Tamam', onPress: () => null }
                    ]
                  );
                  break; 
                    
                  default:
                    break;       
       }*/
        signupFail(dispatch);
  });
};
};
}

const signupFail = (dispatch) => {
 console.log('fail');
  dispatch({
    type: SIGNUP_USER_FAIL
  });
};

const loginFail = (dispatch) => {
  Alert.alert(
    'Mesaj',
    'Kullanıcı bilgileri hatalı',
    [
      { text: 'Tamam', onPress: () => null }
    ]
  );
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

const signupSuccess = (dispatch, user) => {
  Alert.alert(
    'Mesaj',
    'Başarıyla Üye Oldunuz!',
    [
      { text: 'Tamam', onPress: () => null }
    ]
  );
  
  dispatch({
    type: SIGNUP_USER_SUCCESS,
    payload: user

  });
  Actions.menu({ type: 'reset' });
};

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user

  }); 
 
  Actions.menu({ type: 'reset' });
};

const saveAuth = (email, password) => {
  console.log(email);
  console.log(password);
  const userData = [email, password];  
  AsyncStorage.setItem('user_created', JSON.stringify(userData));
};
