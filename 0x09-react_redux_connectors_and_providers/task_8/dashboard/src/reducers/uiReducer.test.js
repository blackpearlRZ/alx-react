import uiReducer from "./uiReducer";
import { SELECT_COURSE } from '../actions/courseActionTypes'
import { DISPLAY_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from "../actions/uiActionTypes";
import { initialState } from './uiReducer';
import { Map } from 'immutable';

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

    it('returns the correct state when LOGIN action is passed', () => {
        const returnedState = uiReducer(initialState, {
            type: LOGIN,
            user: {
                email: "abdu.hany@gmail.com",
                password: "STRONG_PASS"
            }
        });
        expect(returnedState.get('user')).toEqual({ email: "abdu.hany@gmail.com", password: "STRONG_PASS" });
    });

    it('returns the correct state when LOGOUT action is passed', () => {
        const initialStateMap = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: { email: "abdu.hany@gmail.com", password: "STRONG_PASS" }
        })
        const returnedState = uiReducer(initialStateMap, { type: LOGOUT });
        expect(returnedState.get('isUserLoggedIn')).toBe(false);
        expect(returnedState.get('user')).toBe(null);
    });
});