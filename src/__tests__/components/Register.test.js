import React from 'react';
import checkPropTypes from 'check-prop-types';
import { shallow } from 'enzyme';
import { applyMiddleware, createStore } from 'redux';
import { middleware } from '../../store';
import rootReducer from '../../reducers';

import Register from '../../components/Register';

const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Register store={store} />).childAt(0).dive();
    return wrapper;
};


describe('Register component', () => {

    let component

    beforeEach(() => {

        const initState = {
            auth:{
                user: null,
                successMsg: {},
                errors: []
            }  
        };

        component =  setUp(initState);
    });

    it('should renders without errors', () => {    
        const registerComponent = component.find(`[data-test='register']`);
        expect(registerComponent.length).toBe(1);
    });

    it('should display form for registrants bio information', () => {
        const bioform = component.find(`[data-test='bio']`);
        expect(bioform.length).toBe(1);
    });

    it('check for prop-types', () => {

        const expectedProps = {
            errors: [
                { params:'password'},
                { params:'username'},
                { params:'userType'}
            ],
            successMsg: {msg : 'Successful'},
            register: () => {
    
            }
        }

        const compPropsError = checkProps(component, expectedProps);
        expect(compPropsError).toBeUndefined();
    });


    it('should call a function to display address form on click event', () => {
        const instance = component.instance();
        component.find(`[data-test='show-address-form']`).simulate('click');
        expect(instance.goToAddrs).toBeTruthy();
    });

    it('should set the address form display state to true on method call', () => {
        const instance = component.instance();
        expect(component.state('showAddrs')).toBeFalsy();
        instance.goToAddrs(true);
        expect(component.state('showAddrs')).toBeTruthy();
    });

   /** it('should dispatch an action on form submit', () => {

        const initialState = {
            firstName:'first name',
            lastName: 'last name',
            email: 'email address'
        };

        const store = testStore(initialState);
        store.dispatch = jest.fn();
        const instance = component.instance();
        instance.onSubmit(true);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });*/

    
})