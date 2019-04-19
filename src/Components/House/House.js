import React, { Component } from 'react';
// import Dashboard from "./Component/Dashboard/Dashboard"


class House extends Component {

    fuckDelete(id) {
        //some shit here
        console.log("ID", id);
    }

  render() {
    return (
      <div className="House">
        House
        <h1><p>Name: {this.props.name}</p></h1>
        <p>ID: {this.props.id}</p>
        <p>{this.props.address}</p>
        <p>{this.props.city}</p>
        <p>{this.props.state}</p>
        <p>{this.props.zipcode}</p>
        {/* <h1>Hitting House Component HERE</h1> */}
        <button onClick={() => this.props.deleteHouse(this.props.id)}>Delete</button>
        {/* <button onClick={this.returnToHome}>Home</button> */}
      </div>
    );
  }
}

export default House;