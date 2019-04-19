// require('dotenv').config();
import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Wizard from './Components/Wizard/Wizard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Header />
        <Wizard />
      </div>
    );
  }
}

export default App;
