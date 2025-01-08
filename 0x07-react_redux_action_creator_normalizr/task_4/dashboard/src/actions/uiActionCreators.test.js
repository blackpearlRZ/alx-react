import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER
} from "./uiActionTypes";
import {
    login,
    logout,
    hideNotificationDrawer,
    displayNotificationDrawer
} from "./uiActionCreators";

describe('uiActionCreators test', () => {
    it('login function returns correct action', () => {
        const expectedAction = {
            type: LOGIN,
            user: {
                email: "abdu.hany@gmail.com",
                password: "STRONG_PASS"
            }
        };
        const action = login("abdu.hany@gmail.com", "STRONG_PASS");
        expect(action).toEqual(expectedAction);
    });

    it('logout function returns correct action', () => {
        const expectedAction = {
            type: LOGOUT,
        };
        const action = logout();
        expect(action).toEqual(expectedAction);
    });

    it('displayNotificationDrawer function returns correct action', () => {
        const expectedAction = {
            type: DISPLAY_NOTIFICATION_DRAWER,
        };
        const action = displayNotificationDrawer();
        expect(action).toEqual(expectedAction);
    });

    it('hideNotificationDrawer function returns correct action', () => {
        const expectedAction = {
            type: HIDE_NOTIFICATION_DRAWER,
        };
        const action = hideNotificationDrawer();
        expect(action).toEqual(expectedAction);
    });
});