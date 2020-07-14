import React from 'react';

export default function UserPanel(props) {

    const logout = (e) => {
        e.preventDefault();

        Meteor.logout();
    }

    const handleCheckbox = () => {
        props.setHideEmergencyLog(!props.hideEmergencyLog);
    }
    return (
        <div className="user-panel">
            <div className="user-text">Logged in as {props.currentUser.username} </div>
            <button type="button" onClick={logout} className="pure-button">Logout</button>
            <input
                className="hide-log-checkbox"
                name="hide-log"
                type="checkbox"
                checked={props.hideEmergencyLog}
                onChange={handleCheckbox}
            />
            <label htmlFor="hide-log">Hide recent emergencies</label>
        </div>
    );
}
