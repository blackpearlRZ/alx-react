
import React from 'react'
import PropTypes from 'prop-types';


class NotificationItem extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <li onClick={() => { this.props.markAsRead(this.props.id); }} data={this.props.type} dangerouslySetInnerHTML={this.props.html}>
                {this.props.value}
            </li>
        );
    }
};

NotificationItem.defaultProps = {
    type: "default",
    markAsRead: () => { },
    id: 0
};

NotificationItem.propTypes = {
    html: PropTypes.shape({ __html: PropTypes.string }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.number
};

export default NotificationItem;
