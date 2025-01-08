import { FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters, SET_LOADING_STATE, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
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
            notifications: [
                {
                    "id": "5debd76480edafc8af244228",
                    "author": {
                        "id": "5debd764a7c57c7839d722e9",
                        "name": {
                            "first": "Poole",
                            "last": "Sanders"
                        },
                        "email": "poole.sanders@holberton.nz",
                        "picture": "http://placehold.it/32x32",
                        "age": 25
                    },
                    "context": {
                        "guid": "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
                        "isRead": true,
                        "type": "urgent",
                        "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                    }
                },
                {
                    "id": "5debd764507712e7a1307303",
                    "author": {
                        "id": "5debd7648ba8641ce0a34ea4",
                        "name": {
                            "first": "Norton",
                            "last": "Grimes"
                        },
                        "email": "norton.grimes@holberton.nz",
                        "picture": "http://placehold.it/32x32",
                        "age": 37
                    },
                    "context": {
                        "guid": "cec84b7a-7be4-4af0-b833-f1485433f66e",
                        "isRead": false,
                        "type": "urgent",
                        "value": "ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. "
                    }
                },
            ]
        };
        const expectedState = Map({
            notifications: notificationsNormalizer(actionObject.notifications),
            filter: NotificationTypeFilters.DEFAULT,
            loading: false
        });
        const returnedState = notificationReducer(undefined, actionObject);
        expect(returnedState).toEqual(expectedState);
    });

    it('tests SET_TYPE_FILTER', () => {
        const initialState = Map({
            notifications: notificationsNormalizer([
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", value: "New data available" }]),
            filter: NotificationTypeFilters.DEFAULT
        });
        const actionObject = {
            type: SET_TYPE_FILTER,
            filter: NotificationTypeFilters.URGENT
        };
        const returnedState = notificationReducer(initialState, actionObject);
        expect(returnedState.get('filter')).toBe(NotificationTypeFilters.URGENT);
    });

    it('tests SET_LOADING_STATE true', () => {
        const initialState = Map({
            notifications: notificationsNormalizer([
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", value: "New data available" }]),
            filter: NotificationTypeFilters.DEFAULT,
            isLoading: false
        });
        const actionObject = {
            type: SET_LOADING_STATE,
            loadingState: true
        };
        const returnedState = notificationReducer(initialState, actionObject);
        expect(returnedState.get('loading')).toBe(true);
    });

    it('tests SET_LOADING_STATE false', () => {
        const initialState = Map({
            notifications: notificationsNormalizer([
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", value: "New data available" }]),
            filter: NotificationTypeFilters.DEFAULT,
            isLoading: true
        });
        const actionObject = {
            type: SET_LOADING_STATE,
            loadingState: false
        };
        const returnedState = notificationReducer(initialState, actionObject);
        expect(returnedState.get('loading')).toBe(false);
    });
});