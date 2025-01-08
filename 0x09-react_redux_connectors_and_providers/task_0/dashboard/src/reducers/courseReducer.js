import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE
} from "../actions/courseActionTypes";
import { Map, merge, setIn } from 'immutable';
import { coursesNormalizer } from "../schema/courses";

const initialState = Map({});
export default function courseReducer(state = initialState, action) {
    if (action) {
        switch (action.type) {
            case FETCH_COURSE_SUCCESS: {
                const courseList = action.data.map((course) => {
                    return { ...course, isSelected: false };
                });
                const normalizedCourses = coursesNormalizer(courseList);
                return merge(state, normalizedCourses);
            }
            case SELECT_COURSE: {
                return setIn(state, ['entities', 'courses', action.index, 'isSelected'], true);
            }
            case UNSELECT_COURSE: {
                return setIn(state, ['entities', 'courses', action.index, 'isSelected'], false);
            }
            default:
                return state;
        }
    }
    return state;
}
