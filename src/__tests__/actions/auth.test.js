import moxios from 'moxios';
import { testStore } from '../../../Utility';
import configureStore from 'redux-mock-store';

// Actions to be tested
import { register, login } from '../../actions/auth';

const mockStore = configureStore();
const store = mockStore();

 
describe('Register action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('Store should update correctly', () => {

        const initialState = {
            user: null,
            successMsg: {},
            errors:[]
        }

        const expectedState = {
            user: null,
            successMsg: {
                success: 'Registration successful'
            },
            errors:[]
        };

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(register())
        .then(() => {
            const newState = store.getState();
            expect(newState.auth.successMsg).toBe(expectedState);
        })
        
    });

});


describe('Login action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('Store should update correctly', () => {

        const initialState = {
            user: null
        }

        const expectedState = {
            user: {
                firstname:'first name',
                lastname:'lastname',
                email:'email',
                phone:'mobile no'
            }
        };

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 201,
                response: expectedState
            })
        });

        return store.dispatch(login())
        .then(() => {
            const newState = store.getState();
            expect(newState.auth.user).toBe(expectedState);
        })
        
    });

});


