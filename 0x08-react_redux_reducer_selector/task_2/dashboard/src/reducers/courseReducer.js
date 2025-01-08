import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE
} from "../actions/courseActionTypes";

export default function courseReducer(state = [], action) {
    if (action) {
        switch (action.type) {
            case FETCH_COURSE_SUCCESS: {

                const courseList = action.data.map((course) => {
                    return { ...course, isSelected: false };
                });
                return courseList;
            }
            case SELECT_COURSE: {
                return state.map((course) => {
                    if (course.id === action.index) {
                        return { ...course, isSelected: true };
                    }
                    return course;
                });
            }
            case UNSELECT_COURSE: {
                return state.map((course) => {
                    if (course.id === action.index) {
                        return { ...course, isSelected: false };
                    }
                    return course;
                });
            }
            default:
                return state;
        }
    }
    return state;
}
