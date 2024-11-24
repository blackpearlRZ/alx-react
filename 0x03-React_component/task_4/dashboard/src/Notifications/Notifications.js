
import React from 'react';
import './Notifications.css';
import closeIcon from '../assests/close-icon.png'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
    constructor(props){
        super(props)
        this.markAsRead = this.markAsRead.bind(this)
    }
    markAsRead(id){
        console.log(`Notification ${id} has been marked as read`)
    }
    render() {
        return (
        <>
            <div className='menuItem'>
                <p>Your notifications</p>
            </div>
            {this.props.displayDrawer &&
                <div className='Notifications'>
                    <ul>
                        {this.props.listNotifications.length === 0 ?
                            <NotificationItem type='default' value="No new notification for now" /> :
                            <>
                                <p>Here is the list of notifications</p>
                                {this.props.listNotifications.map((notifiction) => {
                                    return <NotificationItem 
                                    id = {notifiction.id}
                                    key={notifiction.id} 
                                    type={notifiction.type}
                                     value={notifiction.value} 
                                     html={notifiction.html} />
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
    );}
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};


Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};


export default Notifications;
