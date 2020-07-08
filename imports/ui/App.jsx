import React from 'react';
import { withTracker } from 'meteor/react-meteor-data'

import UserInfo from './UserInfo';
import LoginForm from './LoginForm';
import ActiveEmergency from './ActiveEmergency';

import Emergencies from '../api/emergencies';

function App(props) {

  const isLoggedIn = !!props.currentUser;

  const newEmergency = () => {
    Meteor.call('emergencies.insert', "test");
  }

  if (isLoggedIn) {
    return (
      <div>
        <UserInfo currentUser={props.currentUser} />
        {
          props.activeEmergency ?
            <ActiveEmergency currentUser={props.currentUser} activeEmergency={props.activeEmergency} /> :
            <button onClick={newEmergency}>New emergency!</button>
        }
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
  Meteor.subscribe('emergencies');

  return {
    currentUser: Meteor.user(),
    activeEmergency: Emergencies.findOne({ status: "new" }),
  };
})(App);
