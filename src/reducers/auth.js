import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

const initialState = {
    user: null,
    successMsg : {},
    errors: []
};


export default function(state=initialState, action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                successMsg : action.payload
            }
        case REGISTER_FAIL:
            return{
                ...state,
                errors:action.payload,
                successMsg : ''
            }
        default:
            return state;
    }
}