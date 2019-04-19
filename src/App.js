// require('dotenv').config();
import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Wizard from './Components/Wizard/Wizard';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import routes from "./routes";  
import './App.css';

class App extends Component {

  // this.getVehicles = this.getVehicles.bind(this);

  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        {routes}
      </div>
      </Router>
    );
  }
}

export default App;
