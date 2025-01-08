import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    defaultData: {
        color: "blue",
    },
    urgentData: {
        color: "red",
    },
    listItem: {
        '@media (max-width: 900px)': {
            width: '100%',
            borderBottom: "1px solid black",
            fontSize: "20px",
            padding: "10px 8px",
        }
    }
});

class NotificationItem extends React.PureComponent {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <li className={css(styles.listItem, this.props.type === "default" ? styles.defaultData : styles.urgentData)} onClick={() => { this.props.markAsRead(this.props.id); }} data={this.props.type} dangerouslySetInnerHTML={this.props.html}>
                {this.props.value}
            </li>
        );
    }
};

NotificationItem.defaultProps = {
    type: "default",
    markAsRead: () => { },
    id: "0"
};

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.string
};

export default NotificationItem;