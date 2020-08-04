import React from 'react';
import './App.css';

import Appointment from 'containers/Appointment';
import AppointmentDetails from 'containers/AppointmentDetails';

import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:date/:month/:year/:timeFrom/details" component={AppointmentDetails}/>
        <Route path="/:date?/:month?/:year?/" component={Appointment}/>
      </Switch>
    </Router>
  );
}

export default App;
