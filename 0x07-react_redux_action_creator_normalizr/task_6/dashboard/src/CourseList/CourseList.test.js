import React from "react";
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from 'aphrodite';


StyleSheetTestUtils.suppressStyleInjection();

describe('<CourseList />', () => {
    it('renders without crashing', () => {
        shallow(<CourseList />);
    })

    it('renders 5 rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow).length).toBe(3);
    });

    it('renders properly when no data is passed', () => {
        const wrapper = shallow(<CourseList listCourses={[]} />);
        expect(wrapper.find(CourseListRow).at(2).dive().text()).toContain('No course available yet');
    });

    it('renders properly when data is passed', () => {
        const listCourses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 }
        ];

        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        // Check the text content of the CourseListRow components directly
        expect(wrapper.find(CourseListRow).at(2).dive().text()).toContain('ES6');
        expect(wrapper.find(CourseListRow).at(3).dive().text()).toContain('Webpack');
        expect(wrapper.find(CourseListRow).at(4).dive().text()).toContain('React');
    });
});