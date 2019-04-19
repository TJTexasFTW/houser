import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import React from "react";
// import { Switch, Route } from "react-router-dom";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import ClassList from './components/ClassList/ClassList';
// import Student from './components/Student/Student';
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
import House from "./Components/House/House";

export default (
    <Switch>
      <Route component={Wizard} path="/wizard" />
      <Route component={Dashboard} path="/" /> //remove word "exact" from in front of path
      {/* <Route exact component={House} path="/house" /> */}
      {/* <Route component={ClassList} path="/classlist/:class" /> */}
      {/* <Route component={Student} path="/student/:id" /> */}
    </Switch>
  );