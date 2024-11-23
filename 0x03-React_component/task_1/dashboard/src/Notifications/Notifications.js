import React from 'react';
import './Notifications.css';
import closeIcon from "../assests/close-icon.png";
import NotificationItem from './NotificationsItem';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer = false , list}) => {
    return (
        <>
            <div className='menuItem'>
                <p>Your notifications</p>
            </div>
            {displayDrawer &&
                <div className='Notifications'>
                    <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationItem type="default" value="New course available" />
                        <NotificationItem type="urgent" value="New resume available" />
                        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
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
    displayDrawer: PropTypes.bool
};


export default Notifications;