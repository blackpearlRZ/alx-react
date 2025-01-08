import React from "react";
import { shallow } from 'enzyme';
import { Footer } from "./Footer";
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext, { user, logOut } from "../App/AppContext";


StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    it('renders atleast Copyright', () => {
        const wrapper = shallow(
            <Footer />
        );
        expect(wrapper.find('p').text().includes('Copyright')).toBe(true);
    });

    it('link is not displayed when user is logged out', () => {
        const wrapper = shallow(
            <Footer />
        );
        expect(wrapper.find('a').exists()).toBe(false);
    });

    it('link is displayed when user is logged in', () => {
        const wrapper = shallow(
            <Footer user={{
                email: "test",
                password: "test",
            }} />
        );
        expect(wrapper.find('a').exists()).toBe(true);
    });
})