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
        {
            "id": "5debd76444dd4dafea89d53b",
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
                "guid": "280913fe-38dd-4abd-8ab6-acdb4105f922",
                "isRead": false,
                "type": "urgent",
                "value": "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
            }
        }]),
    filter: NotificationTypeFilters.DEFAULT,
    isLoading: false,
});

describe('testing notificationSelectors', () => {
    it('tests FilterTypeSelected', () => {
        const filterType = filterTypeSelected(testState);
        expect(filterType).toEqual(NotificationTypeFilters.DEFAULT);
    });

    it('tests getNotifications', () => {
        const notificationsList = getNotifications(testState);
        const expectedNotificationsList = {
            '2d8e40be-1c78-4de0-afc9-fcc147afd4d2': {
                guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
                isRead: true,
                type: 'urgent',
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
            },
            'cec84b7a-7be4-4af0-b833-f1485433f66e': {
                guid: 'cec84b7a-7be4-4af0-b833-f1485433f66e',
                isRead: false,
                type: 'urgent',
                value: 'ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. '
            },
            '280913fe-38dd-4abd-8ab6-acdb4105f922': {
                guid: '280913fe-38dd-4abd-8ab6-acdb4105f922',
                isRead: false,
                type: 'urgent',
                value: 'Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed'
            }
        };
        expect(notificationsList.toJS()).toEqual(expectedNotificationsList);
    });

    it('tests getUnreadNotifications', () => {
        const unreadNotifications = getUnreadNotifications(testState);
        const expectedUnreadNotifications = {
            'cec84b7a-7be4-4af0-b833-f1485433f66e': {
                guid: 'cec84b7a-7be4-4af0-b833-f1485433f66e',
                isRead: false,
                type: 'urgent',
                value: 'ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. '
            },
            '280913fe-38dd-4abd-8ab6-acdb4105f922': {
                guid: '280913fe-38dd-4abd-8ab6-acdb4105f922',
                isRead: false,
                type: 'urgent',
                value: 'Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed'
            }
        };
        expect(unreadNotifications.toJS()).toEqual(expectedUnreadNotifications);
    });
});