import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext, { user, logOut } from './AppContext';

StyleSheetTestUtils.suppressStyleInjection();


describe('<App />', () => {
    it('all of App renders', () => {
        shallow(<App />);
    });

    it('renders a div with class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header').exists()).toBe(false);
    });

    it('renders a div with class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body').exists()).toBe(false);
    });

    it('renders a div with class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer').exists()).toBe(false);
    });

    it('renders a Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications).exists()).toBe(true);
    });

    it('renders a Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login).exists()).toBe(true);
    });

    it('renders a Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer).exists()).toBe(true);
    });

    it('renders a Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header).exists()).toBe(true);
    });

    it('CourseList not displayed', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList).exists()).toBe(false);
    });
});


describe('when isLoggedIn is true', () => {
    it('Login not included', () => {
        const wrapper = shallow(<App />);
        wrapper.setState(
            { user: { ...user, isLoggedIn: true, }, }
        );
        wrapper.update();
        expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('CourseList included', () => {
        const wrapper = shallow(<App />);
        wrapper.setState(
            { user: { ...user, isLoggedIn: true, }, }
        );
        wrapper.update();
        expect(wrapper.find(CourseList)).toHaveLength(1);
    });
});

describe("Test <App /> with logOut function", () => {
    // verify that when the keys control and h are pressed the logOut function,
    // passed as a prop, is called and the alert function is called with the string Logging you out
    it("calls the logOut function and displays the alert", () => {
        const alertMock = jest.spyOn(global, 'alert').mockImplementation(() => { });
        const wrapper = mount(<App />);
        wrapper.setState({ user: { ...user, isLoggedIn: true } });
        const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
        document.dispatchEvent(event);
        expect(alertMock).toHaveBeenCalledWith('Logging you out');
        expect(wrapper.state('user')).toEqual({ email: '', password: '', isLoggedIn: false });
        wrapper.unmount();
        jest.restoreAllMocks();
    });
});

describe("Test State of <App />", () => {
    it("displayDrawer is false", () => {
        const wrapper = mount(<App />);
        expect(wrapper.state('displayDrawer')).toBe(false);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state('displayDrawer')).toBe(true);
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state('displayDrawer')).toBe(false);
    });

    it("handleHideDrawer changes state", () => {
        const wrapper = mount(<App />);
        wrapper.setState({ displayDrawer: true });
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state('displayDrawer')).toBe(false);
    });

    it('login changes state', () => {
        const wrapper = mount(<App />);
        const appInstance = wrapper.instance();
        appInstance.logIn('emailTest', 'passwordTest');
        expect(wrapper.state('user')).toEqual({ email: 'emailTest', password: 'passwordTest', isLoggedIn: true });
    });

    it('login changes state', () => {
        const wrapper = mount(<App />);
        const appInstance = wrapper.instance();
        appInstance.setState({ user: { email: 'emailTest', password: 'passwordTest', isLoggedIn: true } });
        appInstance.logOut();
        expect(wrapper.state('user')).toEqual({ email: '', password: '', isLoggedIn: false });
    });

    it('markNotificationAsRead works as intended', () => {
        const wrapper = mount(<App />);
        const appInstance = wrapper.instance();
        appInstance.setState({
            listNotifications: [
                { id: 1, type: 'default', value: 'test01' },
                { id: 2, type: 'urgent', value: 'test02' },
                { id: 3, type: 'urgent', value: 'test03' },
            ]
        });
        expect(appInstance.state.listNotifications).toHaveLength(3);
        appInstance.markNotificationAsRead(2);
        expect(appInstance.state.listNotifications).toHaveLength(2);
    });
});
