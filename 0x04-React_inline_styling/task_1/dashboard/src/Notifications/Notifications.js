
import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    menuItem: {
        position: "fixed",
        right: "20px",
        top: "20px",
    },
    notifications: {
        margin: "10px 30px",
        paddingLeft: "10px",
        border: "1px dashed red",
        position: "fixed",
        top: "40px",
        right: 0,
    },
    ul: {
        margin: "20px",
        marginLeft: "40px",
    },
});

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(newProps) {
        return newProps.listNotifications.length > this.props.listNotifications.length;
    }

    render() {
        return (
            <>
                <div className={css(styles.menuItem)}>
                    <p>Your notifications</p>
                </div>
                {this.props.displayDrawer &&
                    <div className={css(styles.notifications)}>
                        <ul className={css(styles.ul)}>
                            {this.props.listNotifications.length === 0 ?
                                <NotificationItem markAsRead={this.markAsRead} type='default' value="No new notification for now" /> :
                                <>
                                    <p>Here is the list of notifications</p>
                                    {this.props.listNotifications.map((notification) => {
                                        return <NotificationItem
                                            id={notification.id}
                                            markAsRead={this.markAsRead}
                                            key={notification.id}
                                            type={notification.type}
                                            value={notification.value}
                                            html={notification.html} />
                                    })}
                                </>
                            }
                        </ul>
                        <button style={{
                            marginRight: '10px',
                            backgroundColor: 'white',
                            border: '1px solid lightgrey',
                            borderRadius: '5px',
                            padding: '3px',
                            position: 'absolute',
                            right: '30px',
                            top: '15px',
                        }} aria-label='close' onClick={() => { console.log("Close button has been clicked") }}>
                            <img width="10px" src={closeIcon} alt="close button"></img>
                        </button>
                    </div >
                }
            </>
        );
    }
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};


export default Notifications;
