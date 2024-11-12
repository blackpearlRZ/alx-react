
import React from "react";
import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";


describe('<NotificationItem />', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem />);
    });

    it('renders correct data & value', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find('li').prop('data')).toBe('default');
        expect(wrapper.find('li').text()).toBe('test');
    });

    it('renders correct html', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.find('li').html()).toBe('<li><u>test</u></li>');
    })
});
