import Header from './Header';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';
import { user, logOut } from '../App/AppContext';


StyleSheetTestUtils.suppressStyleInjection();

describe('<Header/>', () => {
    it('renders without crashing', () => {
        mount(
            <AppContext.Provider value={{ user, logOut }}>
                <Header />
            </AppContext.Provider>
        );
    })

    it('renders logo and title', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user, logOut }}>
                <Header />
            </AppContext.Provider>
        );
        wrapper.update();
        expect(wrapper.find('img').exists()).toBe(true);
        expect(wrapper.find('h1').exists()).toBe(true);
    })

    it('Header with default context value', () => {
        const wrapper = mount(
            <AppContext.Provider value={{ user, logOut }}>
                <Header />
            </AppContext.Provider>
        );
        expect(wrapper.find('#logoutSection').exists()).toBe(false);
    })

    it('Header with logged in user', () => {
        const wrapper = mount(
            <AppContext.Provider value={{
                user: {
                    email: "test", password: "test", isLoggedIn: true
                },
                logOut
            }}>
                <Header />
            </AppContext.Provider>
        );
        expect(wrapper.find('#logoutSection').exists()).toBe(true);
    })

    it('logout span is being called', () => {
        const logoutMock = jest.fn();
        const wrapper = mount(
            <AppContext.Provider value={{
                user: {
                    email: "test", password: "test", isLoggedIn: true
                },
                logOut: logoutMock,
            }}>
                <Header />
            </AppContext.Provider>
        );
        wrapper.find('span').simulate('click');
        expect(logoutMock).toHaveBeenCalledTimes(1);
        jest.restoreAllMocks();
    })
})

