import { Map } from 'immutable';


const filterTypeSelected = state => state.get('filter');
const getNotifications = state => Map(state.getIn(['notifications',
    'entities',
    'notifications'
]));
const getUnreadNotifications = state => {
    const notifications = Map(state.getIn([
        'notifications',
        'entities',
        'notifications'
    ]));
    return notifications.filter((notification) => {
        return notification.isRead === false;
    });
}

export {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications
};