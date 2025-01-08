import { bindActionCreators } from "redux";
import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
    SET_LOADING_STATE,
    FETCH_NOTIFICATIONS_SUCCESS
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

function setLoadingState(loadingState) {
    return {
        type: SET_LOADING_STATE,
        loadingState
    };
}

function setNotifications(notifications) {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        notifications
    };
}

function fetchNotifications() {
    return (dispatch) => {
        dispatch(setLoadingState(true));
        return fetch('/notifications.json').then(response => {
            if (response.ok) {
                response.json().then(data => {
                    dispatch(setNotifications(data));
                    dispatch(setLoadingState(false));
                });
            } else {
                dispatch(setLoadingState(false));
            }
        }).catch(error => {
            dispatch(setLoadingState(false));
        });
    }
}

const boundNotificationActionCreator = dispatch => bindActionCreators({
    markAsAread,
    setNotificationFilter
}, dispatch);

export {
    markAsAread,
    setNotificationFilter,
    boundNotificationActionCreator,
    setLoadingState,
    setNotifications,
    fetchNotifications
};