import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    NotificationTypeFilters,
    SET_TYPE_FILTER
} from '../actions/notificationActionTypes'


export const defaultState = {
    notifications: [],
    filter: NotificationTypeFilters.DEFAULT
}
export default function notificationReducer(state = defaultState, action) {
    if (action) {
        switch (action.type) {
            case FETCH_NOTIFICATIONS_SUCCESS: {
                const notificationList = action.data.map((notification) => {
                    return { ...notification, isRead: false };
                });
                return { ...state, notifications: notificationList };
            }
            case MARK_AS_READ: {
                const newNotificationList = state.notifications.map((notification) => {
                    if (action.index === notification.id) return { ...notification, isRead: true };
                    return notification;
                });
                return { ...state, notifications: newNotificationList };
            }
            case SET_TYPE_FILTER: {
                return { ...state, filter: action.filter };
            }
            default:
                return state;
        }
    }
    return state;
}