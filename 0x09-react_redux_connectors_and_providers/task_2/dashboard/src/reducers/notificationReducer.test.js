import { FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import notificationsNormalizer from "../schema/notifications";
import notificationReducer from "./notificationReducer";
import { defaultState } from './notificationReducer';
import { Map } from 'immutable';


describe('notificationReducer test', () => {
    it("returns default state when action object isn't passed", () => {
        const returnedState = notificationReducer();
        expect(returnedState).toEqual(defaultState);
    });

    it('tests FETCH_NOTIFICATIONS_SUCCESS action', () => {
        const actionObject = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", value: "New data available" }
            ]
        };
        const expectedState = Map({
            notifications: notificationsNormalizer([
                { id: 1, type: "default", value: "New course available", isRead: false },
                { id: 2, type: "urgent", value: "New resume available", isRead: false },
                { id: 3, type: "urgent", value: "New data available", isRead: false }]),
            filter: NotificationTypeFilters.DEFAULT
        });
        const returnedState = notificationReducer(undefined, actionObject);
        expect(returnedState).toEqual(expectedState);
    });

    it('tests SET_TYPE_FILTER', () => {
        const initialState = Map({
            notifications: notificationsNormalizer([
                { id: 1, type: "default", value: "New course available", isRead: false },
                { id: 2, type: "urgent", value: "New resume available", isRead: false },
                { id: 3, type: "urgent", value: "New data available", isRead: false }]),
            filter: NotificationTypeFilters.DEFAULT
        });
        const actionObject = {
            type: SET_TYPE_FILTER,
            filter: NotificationTypeFilters.URGENT
        };
        const returnedState = notificationReducer(initialState, actionObject);
        expect(returnedState.get('filter')).toBe(NotificationTypeFilters.URGENT);
    });
});