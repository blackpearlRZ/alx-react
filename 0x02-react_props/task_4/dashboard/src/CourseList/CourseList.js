import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css'

const CourseList = () => {
    return(
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
                <CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell="20" />
                <CourseListRow isHeader={false} textFirstCell="React" textSecondCell="40" />
            </tbody>

        </table>
    )
}

export default CourseList