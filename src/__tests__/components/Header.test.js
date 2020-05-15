import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import { testStore } from '../../../Utility';

import Header from '../../components/common/Header';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Header store={store} />).childAt(0).dive();
    return wrapper;
};

describe('<Header />', () => {


    let component;

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

    /**it('renders the component', () => {
        expect(toJson(component)).toMatchSnapshot();
    });**/

    it('should render logo container', () => {
        const logo = component.find(`[data-test='logo']`);
        expect(logo.length).toBe(1);
    });

    it('should render sign up link', () => {
        const logo = component.find(`[data-test='sign-up']`);
        expect(logo.length).toBe(1);
    });

    it('should render sign in link', () => {
        const logo = component.find(`[data-test='login']`);
        expect(logo.length).toBe(1);
    });
});