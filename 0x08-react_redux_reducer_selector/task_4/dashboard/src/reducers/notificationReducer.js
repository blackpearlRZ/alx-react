import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    NotificationTypeFilters,
    SET_TYPE_FILTER
} from '../actions/notificationActionTypes';
import { Map, merge } from 'immutable';
import notificationsNormalizer from '../schema/notifications';


export const defaultState = Map({
    notifications: [],
    filter: NotificationTypeFilters.DEFAULT
});
export default function notificationReducer(state = defaultState, action) {
    if (action) {
        switch (action.type) {
            case FETCH_NOTIFICATIONS_SUCCESS: {
                const notificationList = action.data.map((notification) => {
                    return { ...notification, isRead: false };
                });
                const normalizedNotificationList = notificationsNormalizer(notificationList);
                return merge(state, Map({
                    notifications: normalizedNotificationList,
                }));
            }
            case MARK_AS_READ: {
                return state.setIn([
                    'notifications',
                    'entities',
                    'notifications',
                    action.index,
                    'isRead'
                ], true);
            }
            case SET_TYPE_FILTER: {
                return state.set('filter', action.filter);
            }
            default:
                return state;
        }
    }
    return state;
}