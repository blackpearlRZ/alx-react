import React from "react";
import { mount, shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from 'aphrodite';


StyleSheetTestUtils.suppressStyleInjection();

describe('<NotificationItem />', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem type="default" />);
    });

    it('renders correct data & value', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find('li').prop('data')).toBe('default');
        expect(wrapper.find('li').text()).toBe('test');
    });

    it('renders correct html', () => {
        const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} />);
        // Check that the inner HTML is set correctly
        expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual({ __html: '<u>test</u>' });
    });

    it('prints correct message when clicked', () => {
        const markAsRead = jest.fn();
        const wrapper = mount(
            <NotificationItem id={5} type="default" value="test" markAsRead={markAsRead} />
        );

        const notificationItem = wrapper.find(NotificationItem); // Find the component
        notificationItem.find('li').prop('onClick')(); // Find the li element
        expect(markAsRead).toHaveBeenCalledWith(5);
    });
});