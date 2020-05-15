import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    isRegistered: false,
    user: null,
    successMsg : {},
    errors: [],
    error: {}
};


export default function(state=initialState, action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                isRegistered : true,
                successMsg : action.payload
            }
        case REGISTER_FAIL:
            return{
                ...state,
                errors:action.payload
            }
        case LOGIN_FAIL:
            return{
                ...state,
                error:action.payload
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                user: action.payload,
                isAuthenticated: true
            }
        case LOGOUT_SUCCESS:
            return{
                ...state,
                user: null,
                isAuthenticated: false,
                isRegistered: false,
                successMsg : {},
                errors: [],
                error: {}
            }
        default:
            return state;
    }
}