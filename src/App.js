import React from 'react';
import './App.css';

import Appointment from 'containers/Appointment';

import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:date?/:month?/:year?/" component={Appointment}/>
      </Switch>
    </Router>
  );
}

export default App;
