import React, { useRef } from 'react';
import { withTracker } from 'meteor/react-meteor-data'

import UserPanel from './UserPanel';
import LoginForm from './LoginForm';
import ActiveEmergency from './ActiveEmergency';
import EmergencyLog from './EmergencyLog';
import NewEmergencyForm from './NewEmergencyForm';

import Emergencies from '../api/emergencies';

import 'purecss/build/pure.css';

function App(props) {

  const isLoggedIn = !!props.currentUser;

  const renderEmergencyLog = () => {
    if (!props.emergencyLog)
      return;

    const ret = props.emergencyLog.map((emergency) => {
      return (
        <EmergencyLog key={emergency._id} emergency={emergency} />
      );
    });

    return (
      <table className="pure-table">
        <caption>Recent emergencies</caption>
        <thead>
          <tr>
            <th>Emergency</th>
            <th>Created by</th>
            <th>Created</th>
            <th>Status</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>{ret}</tbody>
      </table>
    );
  }

  // Display placeholder message if data has not arrived yet
  if (!props.emergenciesReady)
    return "Loading...";


  // If user is not logged in, show only login form.
  if (isLoggedIn) {
    return (
      <div>
        <UserPanel currentUser={props.currentUser} />
        {
          props.activeEmergency ?
            <ActiveEmergency currentUser={props.currentUser} activeEmergency={props.activeEmergency} /> :
            <NewEmergencyForm />
        }
        {renderEmergencyLog()}
      </div>
    );
  }
  else {
    return (
      <LoginForm />
    );
  }
};



export default withTracker(() => {
  const emergenciesHandle = Meteor.subscribe('emergencies');

  return {
    currentUser: Meteor.user(),
    emergencyLog: Emergencies.find({ status: { $ne: "new" } }, { sort: { updatedAt: -1 } }).fetch(),
    activeEmergency: Emergencies.findOne({ status: "new" }),
    emergenciesReady: emergenciesHandle.ready(),
  };
})(App);
