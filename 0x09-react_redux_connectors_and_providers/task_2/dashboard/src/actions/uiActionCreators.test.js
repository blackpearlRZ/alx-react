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
    loginRequest,
    displayNotificationDrawer,
    loginSuccess,
    loginFailure,
    boundUIActionCreators
} from "./uiActionCreators";
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';


const mockStore = configureStore([thunk]);
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

describe('Async Action Creators Test', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('loginRequest dispatches correct actions on success', () => {
        const store = mockStore({});
        fetchMock.restore();

        fetchMock.getOnce('/login-success.json', {
            status: 200,
        });
        return store.dispatch(loginRequest('abdu.hany@gmail.com', 'STRONG_PASS'))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual(login('abdu.hany@gmail.com', 'STRONG_PASS'));
                expect(actions[1]).toEqual(loginSuccess());
            });
    });

    it('loginRequest dispatches correct actions on failure', () => {
        const store = mockStore({});
        fetchMock.restore();

        fetchMock.getOnce('/login-success.json', {
            status: 404,
        });
        return store.dispatch(loginRequest('abdu.hany@gmail.com', 'STRONG_PASS'))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual(login('abdu.hany@gmail.com', 'STRONG_PASS'));
                expect(actions[1]).toEqual(loginFailure());
            });
    });
});