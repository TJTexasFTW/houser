import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Wizard extends Component {


dashboardView() {
    window.location.assign(`/`);
}


  render() {
    return (
      <div className="Wizard">
        Wizard
        {/* <button onClick={this.dashboardView}>Cancel</button> */}
        <Link to='/'><button>Cancel</button></Link>
      </div>
    );
  }
}

export default Wizard;