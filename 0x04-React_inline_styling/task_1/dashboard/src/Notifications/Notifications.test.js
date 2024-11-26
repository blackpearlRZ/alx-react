import React from 'react';
import { mount, shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('Notifications component renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('3 list elements renderes', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).length).toBe(1);
    });

    it('renders correct text', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).dive().text()).toContain('No new notification for now');
    })

    it('renders first NotificationItem properly', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).at(0).dive().text()).toBe('No new notification for now');
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

    it('renders correctly if listNotifications is empty or not passed', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).exists()).toBe(true);
        expect(wrapper.find(NotificationItem).length).toBe(1);
    });

    it('renders correctly if listNotifications is not empty', () => {
        const listNotifications = [
            { id: 1, type: "default", value: "AbduHanyCourse" },
        ];
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find(NotificationItem).exists()).toBe(true);
        expect(wrapper.find(NotificationItem).length).toBe(1);
        expect(wrapper.find(NotificationItem).dive().text()).toContain('AbduHanyCourse');
    });

    it('correct messgae is displayed', () => {
        const wrapper = shallow(<Notifications listNotifications={[]} displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).exists()).toBe(true);
        expect(wrapper.find(NotificationItem).dive().text()).toContain('No new notification for now');
        expect(wrapper.find('div.Notifications').text()).not.toContain('Here is the list of notifications');
    });

    it('mocks console.log function', () => {
        const spy = jest.spyOn(console, 'log');
        const wrapper = mount(<Notifications listNotifications={[
            { id: 1, type: "default", value: "Notification 01" },
        ]} displayDrawer={true} />);
        const instance = wrapper.instance();
        instance.markAsRead(1);
        expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
        spy.mockRestore();
    });

    it('doesnt rerender when same list is given', () => {
        const initialNotifications = [
            { id: 1, type: "default", value: "Notification 01" },
            { id: 2, type: "default", value: "Notification 02" },
        ];

        const shortNotifications = [
            { id: 1, type: "default", value: "Notification 01" },
        ];
        const wrapper = shallow(<Notifications listNotifications={initialNotifications} displayDrawer={true} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'render');
        wrapper.setProps({ listNotifications: shortNotifications });
        expect(instance.render).toHaveBeenCalledTimes(0);
    });

    it('doesnt rerender when same list is given', () => {
        const initialNotifications = [
            { id: 1, type: "default", value: "Notification 01" },
            { id: 2, type: "default", value: "Notification 02" },
        ];

        const longerNotification = [
            { id: 1, type: "default", value: "Notification 01" },
            { id: 2, type: "default", value: "Notification 02" },
            { id: 3, type: "default", value: "Notification 03" },
            { id: 4, type: "default", value: "Notification 04" },
        ]
        const wrapper = shallow(<Notifications listNotifications={initialNotifications} displayDrawer={true} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'render');
        wrapper.setProps({ listNotifications: longerNotification });
        expect(instance.render).toHaveBeenCalledTimes(1);
    });
});