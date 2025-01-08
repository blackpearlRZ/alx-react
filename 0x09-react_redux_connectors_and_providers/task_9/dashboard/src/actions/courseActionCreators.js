import { bindActionCreators } from "redux";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

function selectCourse(index) {
    return {
        type: SELECT_COURSE,
        index
    };
}

function unSelectCourse(index) {
    return {
        type: UNSELECT_COURSE,
        index
    };
}

function setCourses(data) {
    return {
        type: FETCH_COURSE_SUCCESS,
        data
    };
}

function fetchCourses() {
    return (dispatch) => {
        return (fetch('/courses.json').then(response => {
            if (response.ok) {
                response.json().then(data => {
                    dispatch(setCourses(data));
                });
            }
        })).catch(error => {
            console.log(error);
        });
    }
}

const boundCourseActionCreators = dispatch => bindActionCreators({
    selectCourse,
    unSelectCourse,
    fetchCourses,
    setCourses
}, dispatch);

export { selectCourse, unSelectCourse, boundCourseActionCreators, fetchCourses, setCourses };