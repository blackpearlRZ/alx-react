import React from "react";
import { shallow } from 'enzyme';
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from 'aphrodite';


StyleSheetTestUtils.suppressStyleInjection();

describe('when isHeader is true', () => {
    it('renders one cel with colspan = 2', () => {
        const wrapper = shallow(<CourseListRow isHeader textFirstCell="test" textSecondCell={null} />);
        expect(wrapper.find('th').prop('colSpan')).toBe(2);
    });

    it('renders two cells', () => {
        const wrapper = shallow(<CourseListRow isHeader textFirstCell="test" textSecondCell="test2" />);
        expect(wrapper.find('th').length).toBe(2);
    });
});

describe('when isHeader is false', () => {
    it('renders two cells', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
        expect(wrapper.find('td').length).toBe(2);
    });
});