import React, { Component } from 'react';
// import Dashboard from "./Component/Dashboard/Dashboard"


class House extends Component {
  render() {
    return (
      <div className="House">
        House
        <h1><p>Name: {this.props.name}</p></h1>
        <p>{this.props.address}</p>
        <p>{this.props.city}</p>
        <p>{this.props.state}</p>
        <p>{this.props.zipcode}</p>
        {/* <h1>Hitting House Component HERE</h1> */}
        <button>Delete</button>
      </div>
    );
  }
}

export default House;