import * as notificationObjects from '../../notifications.json';

export default function getAllNotificationsByUser(userId) {
    let contextList = [];
    for (const notification of notificationObjects.default) {
        if (notification.author.id === userId) {
            contextList.push(notification.context);
        }
    }
    return contextList;
}