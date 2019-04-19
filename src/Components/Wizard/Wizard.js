import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
// import { Redirect } from 'react-router-dom'
// import { browserHistory } from 'react-router'


class Wizard extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          address: '',
          city: '',
          state: '',
          zipcode: '',
          redirect: true
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

handleZipCode(val) {
    this.setState({zipcode: val});
    // console.log(this.state.name);
}

addNewHouse() {
    // post to /api/treasure/user here
    // console.log("NAME1: ", this.state.name, "ADDRESS1: ", this.state.address);
    axios
      .post('/api/houses', {name: this.state.name, address: this.state.address, city: this.state.city, state: this.state.state, zipcode: this.state.zipcode})
      .then(res => {
        // this.props.addHouse(res.data);
        this.setState({name: '', address: '', city: '', state: '', zipcode: '' });
      })
      .catch(error => {
        console.log(error);
        alert(error)
      });
    //   return <Redirect to='/' />  
    // const path = '/'
    // browserHistory.push(path)

      
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
        <p>Zip: <input placeholder="zipcode" onChange={e => this.handleZipCode(e.target.value)} type="text" /></p>
        <Link to='/'><button>Cancel</button></Link>
        <button onClick={() => this.addNewHouse()}>Complete</button>
        {/* <button onClick={() => this.addTreasure()}>Add</button> */}
      </div>
    );
  }
}

export default Wizard;