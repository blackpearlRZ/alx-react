import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';


describe('<App />', () => {
    it('all of App renders', () => {
        shallow(<App />);
    });

    it('renders a div with class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header').exists()).toBe(true);
    });

    it('renders a div with class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body').exists()).toBe(true);
    });

    it('renders a div with class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer').exists()).toBe(true);
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
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(Login).exists()).toBe(false);
    });

    it('CourseList included', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(CourseList).exists()).toBe(true);
    });
});