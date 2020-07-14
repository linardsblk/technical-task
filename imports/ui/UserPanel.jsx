import React from 'react';

export default function UserPanel(props) {

    const logout = (e) => {
        e.preventDefault();

        Meteor.logout();
    }
    return (
        <div className="user-panel">
            <div className="user-text">Logged in as {props.currentUser.username} </div>
            <button type="button" onClick={logout} className="pure-button">Logout</button>
        </div>
    );
}
