import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class Garage extends Component {
// this.props.addCar(this.props.garageFromParams, this.props.cars.brand, this.props.cars.model, this.props.cars.owner, this.props.cars.plate);

  render () {
    return (
      <div>
        <h2>{this.props.garage}</h2>
        <Link to="/cars/new">
          Add a car
        </Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { garage: reduxState.garage };
}

export default connect(mapStateToProps)(Garage);
