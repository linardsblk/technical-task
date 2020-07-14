import React from 'react';

export default function EmergencyLog(props) {

    const dateToString = (date) => {
        if (!date) {
            return '';
        }

        const mins = ('0' + date.getMinutes()).slice(-2);

        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${mins}`;
    }

    return (
        <tr>
            <td>{props.emergency.text}</td>
            <td>{props.emergency.createdByUsername}</td>
            <td>{dateToString(props.emergency.createdAt)}</td>
            <td>{props.emergency.updatedByUsername} {props.emergency.status}</td>
            <td>{dateToString(props.emergency.updatedAt)}</td>
        </tr>
    );
}
