import React from "react";
import { shallow } from 'enzyme';
import Footer from "./Footer";


describe('<Footer />', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    it('renders atleast Copyright', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('p').text().includes('Copyright')).toBe(true);
    })
})
