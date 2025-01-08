import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';


describe('<Header/>', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    })

    it('renders logo and title', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img').exists()).toBe(true);
        expect(wrapper.find('h1').exists()).toBe(true);
    })
})