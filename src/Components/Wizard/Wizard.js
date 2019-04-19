import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Wizard extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          address: '',
          city: '',
          state: '',
          zipcode: ''
        };
      }
    


dashboardView() {
    window.location.assign(`/`);
}

handleName(val) {
    this.setState({name: val});
    console.log("NAME: ", this.state.name);
}

handleAddress(val) {
    this.setState({address: val});
    // console.log(this.state.name);
}

handleCity(val) {
    this.setState({city: val});
    // console.log(this.state.name);
}

handleState(val) {
    this.setState({state: val});
    // console.log(this.state.name);
}

handleZipcode(val) {
    this.setState({zipcode: val});
    // console.log(this.state.name);
}

  render() {
    return (
      <div className="Wizard">
        <h2>Wizard</h2>
        {/* <button onClick={this.dashboardView}>Cancel</button> */}
        <p>Property Name: <input placeholder='name' onChange={e => this.handleName(e.target.value)} type="text" /></p>
        <p>Street Address: <input placeholder='street address' onChange={e => this.handleAddress(e.target.value)} type="text" /></p>
        <p>City: <input placeholder='city' onChange={e => this.handleCity(e.target.value)} type="text" /></p>
        <p>State: <input placeholder='ST' onChange={e => this.handleState(e.target.value)} type="text" /></p>
        <p>Zip: <input placeholder="zipcode" onChange={e => this.handleZip(e.target.value)} type="text" /></p>
        <Link to='/'><button>Cancel</button></Link>
      </div>
    );
  }
}

export default Wizard;