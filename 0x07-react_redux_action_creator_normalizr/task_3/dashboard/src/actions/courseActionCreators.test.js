import React from 'react';
import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionCreators test', () => {
    it('selectCourse function returns correct action', () => {
        const expectedAction = {
            type: SELECT_COURSE,
            index: 1
        };
        const action = selectCourse(1);
        expect(action).toEqual(expectedAction);
    });

    it('unSelectCourse function returns correct actions', () => {
        const expectedAction = {
            type: UNSELECT_COURSE,
            index: 1
        };
        const action = unSelectCourse(1);
        expect(action).toEqual(expectedAction);
    });
});