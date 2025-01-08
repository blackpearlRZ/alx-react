import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import courseReducer from "./courseReducer";


describe('tests the courseReducer function', () => {
    it('tests default state', () => {
        const returnedState = courseReducer();
        expect(returnedState).toEqual([]);
    });

    it('tests the FETCH_COURSE_SUCCESS', () => {
        const actionObject = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                { id: 1, name: "ES6", credit: 60 },
                { id: 2, name: "Webpack", credit: 20 },
                { id: 3, name: "React", credit: 40 }
            ]
        };
        const expectedState = [
            { id: 1, name: "ES6", credit: 60, isSelected: false },
            { id: 2, name: "Webpack", credit: 20, isSelected: false },
            { id: 3, name: "React", credit: 40, isSelected: false }
        ];
        const returnedState = courseReducer(undefined, actionObject);
        expect(returnedState).toEqual(expectedState);
    });

    it('tests the SELECT_COURSE', () => {
        const actionObject = {
            type: SELECT_COURSE,
            index: 2
        };
        const initialState = [
            { id: 1, name: "ES6", credit: 60, isSelected: false },
            { id: 2, name: "Webpack", credit: 20, isSelected: false },
            { id: 3, name: "React", credit: 40, isSelected: false }
        ];
        const expectedState = [
            { id: 1, name: "ES6", credit: 60, isSelected: false },
            { id: 2, name: "Webpack", credit: 20, isSelected: true },
            { id: 3, name: "React", credit: 40, isSelected: false }
        ];
        const returnedState = courseReducer(initialState, actionObject);
        expect(returnedState).toEqual(expectedState);
    });

    it('tests the UNSELECT_COURSE', () => {
        const actionObject = {
            type: UNSELECT_COURSE,
            index: 1
        };
        const initialState = [
            { id: 1, name: "ES6", credit: 60, isSelected: true },
            { id: 2, name: "Webpack", credit: 20, isSelected: false },
            { id: 3, name: "React", credit: 40, isSelected: false }
        ];
        const expectedState = [
            { id: 1, name: "ES6", credit: 60, isSelected: false },
            { id: 2, name: "Webpack", credit: 20, isSelected: false },
            { id: 3, name: "React", credit: 40, isSelected: false }
        ];
        const returnedState = courseReducer(initialState, actionObject);
        expect(returnedState).toEqual(expectedState);
    });
});