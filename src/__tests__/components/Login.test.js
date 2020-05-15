import React from 'react';
import checkPropTypes from 'check-prop-types';
import { shallow } from 'enzyme';
import { testStore, checkProps } from '../../../Utility';

import Login from '../../components/Login';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Login store={store} />).childAt(0).dive();
    return wrapper;
};

describe('Login component', () => {


    let component

    beforeEach(() => {

        const initState = {
            auth:{
                isAuthenticated: false,
                isRegistered: false,
                user: null,
                successMsg : {},
                errors: [],
                error: {}
            }  
        };

        component =  setUp(initState);
    });

    it('should renders without errors', () => {    
        const loginComponent = component.find(`[data-test='login']`);
        expect(loginComponent.length).toBe(1);
    });

    it('should display form for registrants bio information', () => {
        const loginform = component.find(`[data-test='login-form']`);
        expect(loginform.length).toBe(1);
    });

    it('check for prop-types', () => {

        const expectedProps = {
            error: { statusText:'Invalid email and password'},
            isAuthenticated: false,
            login: () => {
    
            }
        }

        const compPropsError = checkProps(component, expectedProps);
        expect(compPropsError).toBeUndefined();
    });


    it('should call a function to submit form on click event', () => {
        const instance = component.instance();
        component.find(`[data-test='sign-in']`).simulate('click');
        expect(instance.onSubmit).toBeTruthy();
    });

});