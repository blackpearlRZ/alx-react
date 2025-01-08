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
        expect(wrapper.find('input').length).toBe(3);
    })

    it('renders 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label').length).toBe(2);
    })

    it('submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        const submitButton = wrapper.find('input[type="submit"]')
        expect(submitButton.prop('disabled')).toBe(true);
    })

    it('submit button enabled when both email and password are not empty', () => {
        const wrapper = shallow(<Login />);
        const emailInput = wrapper.find('input[type="email"]');
        const passwordInput = wrapper.find('input[type="password"]');
        emailInput.simulate('change', { target: { value: "emailTest@test.com" } });
        let submitButton = wrapper.find('input[type="submit"]');
        expect(submitButton.prop('disabled')).toBe(true);
        passwordInput.simulate('change', { target: { value: "passwordTest" } });
        submitButton = wrapper.find('input[type="submit"]');
        expect(submitButton.prop('disabled')).toBe(false);
    })
})