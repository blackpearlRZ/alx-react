import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters
} from './notificationActionTypes';
import {
    markAsAread,
    setNotificationFilter
} from './notificationActionCreators';


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
});