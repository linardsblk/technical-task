import React from 'react';

export default function UserInfo(props) {

    const logout = (e) => {
        e.preventDefault();

        Meteor.logout();
    }
    return (
        <div>
            <div>Logged in as {props.currentUser.username} </div>
            <button type="button" onClick={logout}>Logout</button>
        </div>
    );
}
