import { bindActionCreators } from "redux";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

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

const boundCourseActionCreators = dispatch => bindActionCreators({
    selectCourse,
    unSelectCourse
}, dispatch);

export { selectCourse, unSelectCourse, boundCourseActionCreators };