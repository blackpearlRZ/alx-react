import * as notificationObjects from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { author: user, context: message });

const normalizedData = normalize(notificationObjects.default, [notification]);

function getAllNotificationsByUser(userId) {
    let contextList = [];
    for (const notification of notificationObjects.default) {
        if (notification.author.id === userId) {
            contextList.push(notification.context);
        }
    }
    return contextList;
}

export { normalizedData, getAllNotificationsByUser }