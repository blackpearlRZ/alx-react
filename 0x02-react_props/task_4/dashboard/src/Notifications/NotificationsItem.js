import React from 'react'

const NotificationItem = ({ type, html, value }) => {
    return (
        <li data={type} dangerouslySetInnerHTML={html}>
            {value}
        </li>
    )
}

export default NotificationItem