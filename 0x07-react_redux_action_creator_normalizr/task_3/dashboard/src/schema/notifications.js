import * as notificationObjects from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { author: user, context: message });

const normalizedData = normalize(notificationObjects.default, [notification]);

function getAllNotificationsByUser(userId) {
    let contextList = [];
    const notifications = normalizedData.entities.notifications;
    const messages = normalizedData.entities.messages;
    for (const id in notifications) {
        if (userId === notifications[id].author) {
            contextList.push(messages[notifications[id].context]);
        }
    }
    return contextList;
}

export { normalizedData, getAllNotificationsByUser }