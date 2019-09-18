import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { WORD_CHANGED, 
    CREATE_REQUEST_SUCCESS, 
    CREATE_REQUEST, 
    WORD_LIST_DATA_SUCCESS,
    UPDATE_REQUEST,
    UPDATE_REQUEST_SUCCESS,
    DELETE_REQUEST,
    DELETE_REQUEST_SUCCESS } from './types';


export const wordChange = ({ props, value }) => {
    return (dispatch) => {
    dispatch({
        type: WORD_CHANGED,
        payload: { props, value }
    });
};
};

export const wordCreate = ({ kelimeTurkce, kelimeIngilizce, cumle, yanlisSayisi }) => {

    const { currentUser } = firebase.auth();
   
    return (dispatch) => {
        dispatch({ type: CREATE_REQUEST });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/kelimeler/`)
       
        .push({ kelimeTurkce, kelimeIngilizce, cumle, yanlisSayisi })
        .then(() => {
        firebase.database().ref('/tumKelimeler')
        .push({ kelimeTurkce, kelimeIngilizce, cumle });
            dispatch({ type: CREATE_REQUEST_SUCCESS });
            Actions.pop();
        });
        
    };
};


export const wordUpdate = ({ kelimeTurkce, kelimeIngilizce, cumle, uid }) => {

    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({ type: UPDATE_REQUEST });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/kelimeler/${uid}`)
        .set({ kelimeTurkce, kelimeIngilizce, cumle })
        .then(() => {
            dispatch({ type: UPDATE_REQUEST_SUCCESS });
            Actions.pop();
        });
    };
};


export const wordDelete = ({ uid }) => {

    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({ type: DELETE_REQUEST });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/kelimeler/${uid}`)
        .remove()
        .then(() => {
            dispatch({ type: DELETE_REQUEST_SUCCESS });
            Actions.pop();
        });
    };
};


export const myWordsListData = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/kelimeler/`)
        .on('value', snapshot => {
            dispatch({ type: WORD_LIST_DATA_SUCCESS, payload: snapshot.val() });
        });
    };


};

export const wordsListData = () => {
   

    return (dispatch) => {
        firebase.database().ref('/tumKelimeler')
        .on('value', snapshot => {
            dispatch({ type: WORD_LIST_DATA_SUCCESS, payload: snapshot.val() });
        });
    };


};