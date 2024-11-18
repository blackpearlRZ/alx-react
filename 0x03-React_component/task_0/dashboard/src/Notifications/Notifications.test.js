import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('Notifications component renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('3 list elements renderes', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    it('renders correct text', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.Notifications p').text()).toBe('Here is the list of notifications');
    })

    it('renders first NotificationItem properly', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).first().html()).toBe('<li data=\"default\">New course available</li>');
    })

    it('menu item is being displayed when displayDrawe is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('div.Notifications not displaying when displayDrawe is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('div.Notifications').exists()).toBe(false);
    });

    it('menu item is being displayed when displayDrawe is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('div.Notifications is displayed when displayDrawe is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.Notifications').exists()).toBe(true);
    });
});