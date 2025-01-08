import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters
} from "./notificationActionTypes";

function markAsAread(index) {
    return {
        type: MARK_AS_READ,
        index
    };
}

function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter
    };
}

export { markAsAread, setNotificationFilter };