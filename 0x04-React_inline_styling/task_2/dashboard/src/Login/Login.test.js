import Login from './Login';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';


StyleSheetTestUtils.suppressStyleInjection();
describe('<Login />', () => {
    it('renders without crashing', () => {
        shallow(<Login />);
    })

    it('renders 2 input tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toBe(2);
    })

    it('renders 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label').length).toBe(2);
    })
})