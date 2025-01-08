import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    NotificationTypeFilters,
    SET_LOADING_STATE,
    SET_TYPE_FILTER
} from '../actions/notificationActionTypes';
import { Map, mergeDeep } from 'immutable';
import notificationsNormalizer from '../schema/notifications';


export const defaultState = Map({
    notifications: {
        entities: {
            messages: {},
            notifications: {},
            users: {},
        },
        result: []
    },
    filter: NotificationTypeFilters.DEFAULT,
    loading: false
});
export default function notificationReducer(state = defaultState, action) {
    if (action) {
        switch (action.type) {
            case FETCH_NOTIFICATIONS_SUCCESS: {
                // const notificationList = action.data.map((notification) => {
                //     return { ...notification, isRead: false };
                // });
                const normalizedNotificationList = notificationsNormalizer(action.notifications);
                const mergedState = mergeDeep(state, Map({
                    notifications: normalizedNotificationList
                }));
                return mergedState;
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
            case SET_LOADING_STATE: {
                return state.set('loading', action.loadingState);
            }
            default:
                return state;
        }
    }
    return state;
}