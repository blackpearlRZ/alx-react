import {
    LOGIN,
    LOGOUT,
    HIDE_NOTIFICATION_DRAWER,
    DISPLAY_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./uiActionTypes";
import { bindActionCreators } from "redux";

function login(email, password) {
    return {
        type: LOGIN,
        user: {
            email,
            password
        }
    };
}

function logout() {
    return {
        type: LOGOUT
    };
}

function displayNotificationDrawer() {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
    };
}

function hideNotificationDrawer() {
    return {
        type: HIDE_NOTIFICATION_DRAWER
    };
}

function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

function loginFailure() {
    return {
        type: LOGIN_FAILURE
    };
}

function loginRequest(email, password) {
    return (dispatch) => {
        dispatch(login(email, password));
        return fetch('/login-success.json')
            .then(response => {
                if (response.ok) dispatch(loginSuccess());
                else dispatch(loginFailure());
            })
            .catch(error => dispatch(loginFailure()));
    }
}

const boundUIActionCreators = dispatch => bindActionCreators({
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginSuccess,
    loginFailure,
}, dispatch);

export {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginSuccess,
    loginFailure,
    loginRequest,
    boundUIActionCreators
};