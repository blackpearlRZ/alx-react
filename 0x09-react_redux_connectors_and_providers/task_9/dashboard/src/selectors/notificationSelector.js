import { Map } from 'immutable';


const filterTypeSelected = state => state.get('filter');
const getNotifications = state => Map(state.getIn([
    'notifications',
    'entities',
    'messages'
]));
const getUnreadNotifications = state => {
    const notifications = Map(state.getIn([
        'notifications',
        'entities',
        'messages'
    ]));
    const unreadNotifications = notifications.filter((notification) => {
        return notification.isRead === false;
    });
    return unreadNotifications;
}

export {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications
};