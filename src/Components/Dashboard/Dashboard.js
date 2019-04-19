import React, { Component } from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {

    constructor() {
        super();
    
        this.state = {
          houses: [{}]
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
          this.setState({ houses: {} });
        }
      }
    
    getAllHouses() {
        // axios GET to /api/treasure/all here
        axios.get('/api/houses')
        .then( houses => {
          this.setState({
            houses: {
              ...this.state.houses,
              all: houses.data
            }
          })
        }).catch( error => alert(error.response.request.response))
      };


  render() {

    const houses = this.state.houses.map((houses, i) => ( 
           <div><h3>NAME: { houses.name } </h3>
            <p>{houses.address}</p> 
            <p>{houses.city} </p>
            <p>{houses.state}</p> 
            <p>{houses.zipcode}</p></div>   
      ));

    return (
      <div className="Dashboard">
        Dashboard
        <House />
        {houses}
        <Link to='/wizard'><button>Add New Property</button></Link>
        {/* <button onClick={this.returnToHome}>Home</button> */}
      </div>
    );
  }
}

export default Dashboard;
