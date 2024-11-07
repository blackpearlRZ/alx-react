
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('Notifications component renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('3 list elements renderes', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    it('renders correct text', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
    })

    it('renders first NotificationItem properly', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data="default">New course available</li>');
    })
});
