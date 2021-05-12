import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCar } from '../actions';

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }
  render () {
    if (!this.props.car) {
      return <p>Loading</p>;
    }
    return (
      <div>
        <Link to="/">
          Back to cars
        </Link>
        <div>
          <h3>{this.props.car.brand} - {this.props.car.model}</h3>
          <p>Owner: {this.props.car.owner}</p>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}

function mapStateToProps(reduxState, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  return { car: reduxState.cars.find(c => c.id === idFromUrl) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);