import React from 'react';

export default function ActiveEmergency(props) {

    const cancelEmergency = () => {
        Meteor.call('emergencies.cancel', props.activeEmergency._id);
    };

    const respondToEmergency = () => {
        Meteor.call('emergencies.respond', props.activeEmergency._id);
    };

    return (
        <div className="active-emergency">
            <div className="active-emergency-text">{props.activeEmergency.text}</div>
            {
                // Emergency creator can cancel, others can respond
                props.activeEmergency.createdBy === props.currentUser._id ?
                    <button type="button" className="pure-button" onClick={cancelEmergency}>Cancel</button> :
                    <button type="button" className="pure-button button-primary" onClick={respondToEmergency}>Respond</button>
            }
        </div>
    );
}
