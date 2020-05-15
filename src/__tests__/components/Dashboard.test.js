import React from 'react';
import { shallow } from 'enzyme';
import { testStore, checkProps } from '../../../Utility';

import Dashboard from '../../components/Dashboard';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Dashboard store={store} />).childAt(0).dive();
    return wrapper;
};

describe('Dashboard component', () => {

    let component;

    beforeEach(() => {

        const initialState = {
            auth:{
                user: null,
                successMsg: {},
                errors: []
            }  
        };

        component = setUp(initialState);
    });

    it('should renders without errors', () => {
        const dashboardComponent = component.find(`[data-test='dashboard']`);
        expect(dashboardComponent.length).toBe(1);
    });

    it('check for prop-types', () => {

        const expectedProps = {
            user: {
                firstname : 'first name',
                lastname : 'lastname',
                email : 'email',
                usertype : 0
            },
            isAuthenticated: true
        }

        const compPropsError = checkProps(component, expectedProps);
        expect(compPropsError).toBeUndefined();
    });
});