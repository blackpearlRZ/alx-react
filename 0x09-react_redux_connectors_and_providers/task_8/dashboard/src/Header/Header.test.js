import { Header } from './Header';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { user, logOut } from '../App/AppContext';


StyleSheetTestUtils.suppressStyleInjection();

describe('<Header/>', () => {
    it('renders without crashing', () => {
        shallow(
            <Header />
        );
    })

    it('renders logo and title', () => {
        const wrapper = shallow(
            <Header user={user} logout={logOut} />
        );
        wrapper.update();
        expect(wrapper.find('img').exists()).toBe(true);
        expect(wrapper.find('h1').exists()).toBe(true);
    })

    it('Header with default context value', () => {
        const wrapper = shallow(
            <Header />
        );
        expect(wrapper.find('#logoutSection').exists()).toBe(false);
    })

    it('Header with logged in user', () => {
        const wrapper = shallow(
            <Header
                user={{ email: "test", password: "test", isLoggedIn: true }}
                logout={logOut}
            />
        );
        expect(wrapper.find('#logoutSection').exists()).toBe(true);
    })

    it('logout span is being called', () => {
        const logoutMock = jest.fn();
        const wrapper = shallow(
            <Header
                user={{ email: "test", password: "test", isLoggedIn: true }}
                logout={logoutMock}
            />
        );
        wrapper.find('span').simulate('click');
        expect(logoutMock).toHaveBeenCalledTimes(1);
        jest.restoreAllMocks();
    })
})

