import React from 'react'
import PropTypes from 'prop-types'
const NotificationItem = ({ type = 'default', html, value }) => {
    return (
        <li data={type} dangerouslySetInnerHTML={html}>
            {value}
        </li>
    )
}

NotificationItem.propTypes = {
    html: PropTypes.shape({__html: PropTypes.string}),
    type: PropTypes.string.isRequired,
    value: PropTypes.string
}

export default NotificationItem