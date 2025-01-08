import React from 'react';
import { fetchCourses, selectCourse, setCourses, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';


const mockStore = configureStore([thunk]);

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

    it('fetchCourses function returns correct action', () => {
        const store = mockStore({});
        fetchMock.restore();
        fetchMock.getOnce('/courses.json', {
            status: 200,
            body: {
                courses: [1, 2, 3]
            }
        });
        store.dispatch(fetchCourses()).then(
            () => {
                const actions = store.getActions();
                expect(actions[0]).toEqual(setCourses({ courses: [1, 2, 3] }));
            }
        );
    });
});