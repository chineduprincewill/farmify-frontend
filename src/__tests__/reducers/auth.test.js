import { REGISTER_SUCCESS } from '../../actions/types';
import auth from '../../reducers/auth';

describe('auth reducer', () => {

    const state = {
        isAuthenticated: false,
        isRegistered: false,
        user: null,
        successMsg : {},
        errors: [],
        error: {}
    }

    it('should return default state', () => {
        const newState = auth(state, {});
        expect(newState).toEqual(state);
    });

    it('should return new state if receiving type', () => {

        const regResponse = { 
            isAuthenticated: false,
            isRegistered: true,
            user: null,
            successMsg: { 
                            success : 'Registration successfull'
                        },
            errors: [],
            error: {}
        };

        const success = {success : 'Registration successfull'};

        const newState = auth(state, {
            type: REGISTER_SUCCESS,
            ...state,
            payload: success
        });
        expect(newState).toEqual(regResponse);
    });
});