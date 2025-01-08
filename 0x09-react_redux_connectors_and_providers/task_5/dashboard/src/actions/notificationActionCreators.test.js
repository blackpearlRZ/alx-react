import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
    SET_LOADING_STATE,
    FETCH_NOTIFICATIONS_SUCCESS
} from './notificationActionTypes';
import {
    fetchNotifications,
    markAsAread,
    setLoadingState,
    setNotificationFilter,
    setNotifications
} from './notificationActionCreators';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';


const mockStore = configureStore([thunk]);

describe('notificationActionCreators test', () => {
    it('markAsAread function returns correct action', () => {
        const expectedAction = {
            type: MARK_AS_READ,
            index: 1
        };
        const action = markAsAread(1);
        expect(action).toEqual(expectedAction);
    });

    it('setNotificationFilter function returns correct action', () => {
        const expectedAction1 = {
            type: SET_TYPE_FILTER,
            filter: NotificationTypeFilters.URGENT
        };
        const expectedAction2 = {
            type: SET_TYPE_FILTER,
            filter: NotificationTypeFilters.DEFAULT
        }
        const action1 = setNotificationFilter(NotificationTypeFilters.URGENT);
        const action2 = setNotificationFilter(NotificationTypeFilters.DEFAULT);
        expect(action1).toEqual(expectedAction1);
        expect(action2).toEqual(expectedAction2);
    });

    it('tests setLoadingState function', () => {
        const expectedAction = {
            type: SET_LOADING_STATE,
            loadingState: true
        };
        const action = setLoadingState(true);
        expect(action).toEqual(expectedAction);
    });

    it('tests setNotifications function', () => {
        const expectedAction = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            notifications: [1, 2, 3]
        }
        const action = setNotifications([1, 2, 3]);
        expect(action).toEqual(expectedAction);
    });

    it('tests fetchNotifications function', () => {
        const store = mockStore({});
        fetchMock.restore();
        fetchMock.getOnce('/notifications.json', {
            status: 200,
            body: {
                notifications: [1, 2, 3]
            }
        });
        return store.dispatch(fetchNotifications()).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual(setLoadingState(true));
            expect(actions[1]).toEqual(setNotifications({ notifications: [1, 2, 3] }));
            expect(actions[2]).toEqual(setLoadingState(false));
        })
    });

    it('tests fetchNotifications function failure', () => {
        const store = mockStore({});
        fetchMock.restore();
        fetchMock.getOnce('/notifications.json', {
            status: 404
        });
        return store.dispatch(fetchNotifications()).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual(setLoadingState(true));
            expect(actions[1]).toEqual(setLoadingState(false));
        })
    });
});