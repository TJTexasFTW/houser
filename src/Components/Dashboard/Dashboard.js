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

         this.pleaseDelete = this.pleaseDelete.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
          this.setState({ houses: {} });
        }
      }
    
    componentDidMount() {
        // axios GET to /api/treasure/all here
        axios.get('/api/houses')
        .then( houses => {
          this.setState({
            houses: houses.data
          })
        }).catch( error => alert(error))
      };

pleaseDelete(id) {
    axios.delete(`/api/houses/${id}`)
    .then(idk => { axios.get('/api/houses')
    .then( houses => {
      this.setState({
        houses: houses.data
      })
    }).catch( error => alert(error))})
}


  render() {

    const houses = this.state.houses.map((houses, i) => ( 
            <div>
                <House deleteHouse={this.pleaseDelete} id={houses.id} name={houses.name} address={houses.address} city={houses.city} state={houses.state} zipcode={houses.zipcode}/>
                {/* <h3>NAME: { houses.name } </h3>
                <p>{houses.address}</p> 
                <p>{houses.city} </p>
                <p>{houses.state}</p> 
                <p>{houses.zipcode}</p> */}
            </div>   
      ));
    //   console.log(houses)

    return (
      <div className="Dashboard">
        Dashboard
        {houses}
        <Link to='/wizard'><button>Add New Property</button></Link>
        {/* <button onClick={this.returnToHome}>Home</button> */}
      </div>
    );
  }
}

export default Dashboard;
