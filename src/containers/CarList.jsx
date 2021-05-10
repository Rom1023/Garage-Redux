import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Car from '../containers/Car';

import { fetchCars } from '../actions';

class CarList extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garageFromParams);
  }

  render () {
    return (
      <div>
        {this.props.cars.map((car) => {
          return (
            <div key={car.id}>
              <Car />
            </div>
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
  return { cars: reduxState.cars };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
