import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchCar, deleteCar } from '../actions';

import Garage from '../containers/Garage';

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }
  handleClick = () => {
    this.props.deleteCar(this.props.match.params.id, () => this.props.history.push('/'));
  }

  render () {
    if (!this.props.car) {
      return <p>Loading</p>;
    }
    return (
      <div  className="d-flex mt-3">
        <div className="col-4">
          <Garage />
          <Link to="/" className="btn btn-primary">
            Back to cars
          </Link>
        </div>
        <div className="card-car flex-grow-1 ml-3">
          <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
          <div className="card-car-infos">
            <h3>{this.props.car.brand} - {this.props.car.model}</h3>
            <p>Owner: {this.props.car.owner}</p>
          </div>
          <i className="fa fa-trash-o card-car-delete-button" aria-hidden="true" onClick={this.handleClick}></i>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

function mapStateToProps(reduxState, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  return {
    car: reduxState.cars.find(c => c.id === idFromUrl)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
