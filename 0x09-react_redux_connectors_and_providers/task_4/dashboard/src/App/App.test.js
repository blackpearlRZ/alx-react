import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';
import { Map } from 'immutable';

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
        wrapper.setProps(
            { isLoggedIn: true }
        );
        wrapper.update();
        expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('CourseList included', () => {
        const wrapper = shallow(<App />);
        wrapper.setProps(
            { isLoggedIn: true }
        );
        wrapper.update();
        expect(wrapper.find(CourseList)).toHaveLength(1);
    });
});

describe("Test State of <App />", () => {

    it('markNotificationAsRead works as intended', () => {
        const wrapper = shallow(<App />);
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

describe('Testing mapStateToProps function', () => {

    it('returns the right object', () => {
        let state = {
            ui: Map({
                isUserLoggedIn: true,
                isNotificationDrawerVisible: false,
            }),
            courses: Map({}),
            notifications: Map({})
        };
        const returnedState = mapStateToProps(state);
        expect(returnedState).toEqual({ isLoggedIn: true, displayDrawer: false });
    });
});
