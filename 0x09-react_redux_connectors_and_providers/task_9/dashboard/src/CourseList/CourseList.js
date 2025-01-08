import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';
import { Component } from 'react';
import { connect } from 'react-redux';


const styles = StyleSheet.create({
    table: {
        width: "100%",
        textAlign: "left",
        border: "1px solid lightgrey",
    }
});

class CourseList extends Component {
    componentDidMount() {
        this.props.fetchCourses();
    }
    render() {
        const { listCourses } = this.props;
        return (
            <table id="CourseList" className={css(styles.table)}>
                <thead>
                    <CourseListRow
                        textFirstCell="Available courses"
                        isHeader={true}
                    />
                    <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
                </thead>
                <tbody>
                    {listCourses.length === 0 ?
                        <CourseListRow
                            isHeader={false}
                            textFirstCell="No course available yet" /> :
                        listCourses.map((course, index) => {
                            return <CourseListRow
                                key={course.id}
                                isHeader={false}
                                textFirstCell={course.name}
                                textSecondCell={course.credit.toString()}
                                isChecked={course.isSelected}
                                onChangeRow={this.props.onChangeRow}
                                id={course.id}
                            />;
                        })
                    }
                </tbody>
            </table>
        );
    }
}

CourseList.propTypes = {
    fetchCourses: PropTypes.func,
    selectCourse: PropTypes.func,
    unSelectCourse: PropTypes.func,
    listCourses: PropTypes.arrayOf(Object)
}

CourseList.defaultProps = {
    fetchCourses: () => { },
    selectCourse: () => { },
    unSelectCourse: () => { },
    listCourses: []
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCourses: () => { dispatch(fetchCourses()) },
        selectCourse: (index) => { dispatch(selectCourse(index)) },
        unSelectCourse: (index) => { dispatch(unSelectCourse(index)) },
        onChangeRow: (id, checked) => {
            if (checked) {
                dispatch(unSelectCourse(id));
            } else {
                dispatch(selectCourse(id));
            }
        }
    };
};

const mapStateToProps = (state) => {
    return {
        listCourses: getListCourses(state.courses)
    };
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(PropTypes.object),
};

export { CourseList };

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);