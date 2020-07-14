import React, { useRef } from 'react';

export default function NewEmergencyForm(props) {


    const emergencyTextInput = useRef();

    const createEmergency = (e) => {
        e.preventDefault();

        const text = emergencyTextInput.current.value.trim();

        if (text) {
            Meteor.call('emergencies.insert', text);
        }
    }

    return (
        <form>
            <input type="text" placeholder="Emergency text" ref={emergencyTextInput} />
            <input type="submit" onClick={createEmergency} value="Create" />
        </form>
    );
}
