import React from "react";
import { mount, shallow } from 'enzyme';
import { CourseList } from './CourseList';
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from 'aphrodite';
import fetchMock from 'fetch-mock';


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
            { id: "1", name: 'ES6', credit: 60 },
            { id: "2", name: 'Webpack', credit: 20 },
            { id: "3", name: 'React', credit: 40 }
        ];

        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        // Check the text content of the CourseListRow components directly
        expect(wrapper.find(CourseListRow).at(2).dive().text()).toContain('ES6');
        expect(wrapper.find(CourseListRow).at(3).dive().text()).toContain('Webpack');
        expect(wrapper.find(CourseListRow).at(4).dive().text()).toContain('React');
    });

    it('correct action is dispatched when component is mounted', () => {
        const fetchCourses = jest.fn();
        shallow(<CourseList fetchCourses={fetchCourses} />);
        expect(fetchCourses).toHaveBeenCalledTimes(1);
    });

    it('correct action is dispatched when course is selected', () => {
        const selectCourse = jest.fn();
        const unSelectCourse = jest.fn();
        const wrapper = mount(<CourseList
            listCourses={[
                { id: "1", name: 'ES6', credit: 60, isSelected: true },
                { id: "2", name: 'Webpack', credit: 20, isSelected: false },
                { id: "3", name: 'React', credit: 40, isSelected: false }
            ]}
            onChangeRow={(id, checked) => {
                if (checked) {
                    unSelectCourse(id);
                } else {
                    selectCourse(id);
                }
            }}
        />);

        // testing with checked element
        wrapper.find('input').at(0).simulate('change');
        expect(unSelectCourse).toHaveBeenCalledTimes(1);

        // testing with unchecked element
        wrapper.find('input').at(1).simulate('change');
        expect(selectCourse).toHaveBeenCalledTimes(1);
    });
});