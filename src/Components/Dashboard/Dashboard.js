import React, { Component } from 'react';
import House from '../House/House'
import {Link} from 'react-router-dom'

class Dashboard extends Component {


    

  render() {
    return (
      <div className="Dashboard">
        Dashboard
        <House />
        <Link to='/wizard'><button>Add New Property</button></Link>
        {/* <button onClick={this.returnToHome}>Home</button> */}
      </div>
    );
  }
}

export default Dashboard;
