import moxios from 'moxios';
import { testStore } from '../../../Utility';
import configureStore from 'redux-mock-store';

// Actions to be tested
import { register } from '../../actions/auth';
import { REGISTER_SUCCESS } from '../../actions/types';

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


/** 
describe('Register action', () => {

    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
      });
    

      describe('register', () => {
        test('Dispatches the correct action and payload', () => {
          const expectedActions = [
            {
              'payload': { success:'Registration successful'},
              'type': 'REGISTER_SUCCESS',
            },
          ];
      
          return store.dispatch(register());
          expect(store.getActions()).toEqual(expectedActions);
        });
      });


});
*/
