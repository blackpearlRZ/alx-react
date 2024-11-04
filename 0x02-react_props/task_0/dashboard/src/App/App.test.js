import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


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
});