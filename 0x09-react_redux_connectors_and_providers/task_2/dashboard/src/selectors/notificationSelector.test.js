import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications
} from "./notificationSelector";
import notificationsNormalizer from '../schema/notifications';
import { NotificationTypeFilters } from '../actions/notificationActionTypes'
import { Map, fromJS } from 'immutable';


const testState = Map({
    notifications: notificationsNormalizer([
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: true },
        { id: 3, type: "urgent", value: "New data available", isRead: false }]),
    filter: NotificationTypeFilters.DEFAULT
});

describe('testing notificationSelectors', () => {
    it('tests FilterTypeSelected', () => {
        const filterType = filterTypeSelected(testState);
        expect(filterType).toEqual(NotificationTypeFilters.DEFAULT);
    });

    it('tests getNotifications', () => {
        const notificationsList = getNotifications(testState);
        const expectedNotificationsList = {
            '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
            '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
            '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false }
        };
        expect(notificationsList.toJS()).toEqual(expectedNotificationsList);
    });

    it('tests getUnreadNotifications', () => {
        const unreadNotifications = getUnreadNotifications(testState);
        const expectedUnreadNotifications = {
            '1': {
                id: 1,
                type: 'default',
                value: 'New course available',
                isRead: false
            },
            '3': { id: 3, type: 'urgent', value: 'New data available', isRead: false }
        };
        expect(unreadNotifications.toJS()).toEqual(expectedUnreadNotifications);
    });
});