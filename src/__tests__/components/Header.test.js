import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import Header from '../../components/common/Header';

describe('<Header />', () => {


    let component;

    beforeEach(() => {
        component = shallow(<Header />);
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