import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import getLatestNotification  from '../utils/utils';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ displayDrawer = false, listNotifications = [] }) => {
    return (
        <>
            <div className='menuItem'>
                <p>Your notifications</p>
            </div>
            {displayDrawer &&
                <div className='Notifications'>
                    <ul>
                        {listNotifications.length === 0 ?
                            <NotificationItem type='default' value="No new notification for now" /> :
                            <>
                                <p>Here is the list of notifications</p>
                                {listNotifications.map((notifiction) => {
                                    return <NotificationItem key={notifiction.id} type={notifiction.type} value={notifiction.value} html={notifiction.html} />
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
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};


export default Notifications;