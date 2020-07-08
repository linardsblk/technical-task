import React from 'react';

export default function ActiveEmergency(props) {

    const cancelEmergency = () => {
        Meteor.call('emergencies.cancel', props.activeEmergency._id);
    };

    const respondToEmergency = () => {
        Meteor.call('emergencies.respond', props.activeEmergency._id);
    };

    return (
        <div>
            <div>{props.activeEmergency.text}</div>
            {
                props.activeEmergency.createdBy === props.currentUser._id ?
                    <button type="button" onClick={cancelEmergency}>Cancel</button> :
                    <button type="button" onClick={respondToEmergency}>Respond</button>
            }
        </div>
    );
}
