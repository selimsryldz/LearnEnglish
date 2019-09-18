import { EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    SIGNUP_USER,
    SIGNUP_USER_FAIL,
    SIGNUP_USER_SUCCESS } from '../actions/types';
const INITIAL_STATE = {
    email: '',
    password: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
            case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false };
        case LOGIN_USER_FAIL:
            return { ...state, loading: false };
        case SIGNUP_USER:
            return { ...state, loading: true };
        case SIGNUP_USER_SUCCESS:
            return { ...state, loading: false };
        case SIGNUP_USER_FAIL:
            return { ...state, loading: false };

            default:
                return state;
    }
}