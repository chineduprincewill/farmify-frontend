import React from 'react';
import { shallow } from 'enzyme';

import App from '../../App';

describe('App Component',() => {

    let component;

    beforeEach(() => {
        component = shallow(<App />);
    });

    it('Should render without errors', () => {
        const container = component.find('.container');
        expect(container.length).toBe(1);
    });

    it('Should render <Header /> child component', () => {
        const headerComponent = component.find('Header');
        expect(headerComponent.length).toBe(1);
    });
});