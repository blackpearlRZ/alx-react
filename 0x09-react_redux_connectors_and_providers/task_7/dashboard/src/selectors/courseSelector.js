import { Map } from 'immutable';


const getListCourses = state => {
    const courses = Map(state.getIn([
        'entities',
        'courses'
    ]));
    return courses.valueSeq().toArray();
}

export {
    getListCourses
};