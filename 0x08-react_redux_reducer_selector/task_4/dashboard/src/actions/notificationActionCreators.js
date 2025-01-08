import { bindActionCreators } from "redux";
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

const boundNotificationActionCreator = dispatch => bindActionCreators({
    markAsAread,
    setNotificationFilter
}, dispatch);

export { markAsAread, setNotificationFilter, boundNotificationActionCreator };