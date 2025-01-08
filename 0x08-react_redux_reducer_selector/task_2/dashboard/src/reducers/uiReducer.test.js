import uiReducer from "./uiReducer";
import { SELECT_COURSE } from '../actions/courseActionTypes'
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { initialState } from './uiReducer'

describe('uiReducer tests', () => {

    it('returns the initial state when no action is passed', () => {
        const returnedState = uiReducer();
        expect(returnedState).toBe(initialState);
    });

    it('returns the correct state when SELECT_COURSE action is passed', () => {
        const returnedState = uiReducer(initialState, { type: SELECT_COURSE });
        expect(returnedState).toBe(initialState);
    });

    it('returns the correct state when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
        expect(initialState.get('isNotificationDrawerVisible')).toBe(false);
        const returnedState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(returnedState.get('isNotificationDrawerVisible')).toBe(true);
    });
});