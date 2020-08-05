import React from 'react';
import './App.css';

import Appointment from 'containers/Appointment';
import AppointmentDetails from 'containers/AppointmentDetails';
import { Provider } from 'react-redux';

import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import store from './store.js';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/:date/:month/:year/:timeFrom/details" component={AppointmentDetails}/>
          <Route path="/:date?/:month?/:year?/" component={Appointment}/>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
