import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Car from '../containers/Car';

import { fetchCars } from '../actions';

class CarList extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render () {
    return (
      <div>
        {this.props.cars.map((car) => {
          return (
            <Link to={`/cars/${car.id}`} key={car.id}>
              <div>
                <Car car={car} />
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

function mapStateToProps(reduxState) {
  return {
    cars: reduxState.cars,
    garage: reduxState.garage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
