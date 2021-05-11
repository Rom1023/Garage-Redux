import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { addCar } from '../actions';

import Garage from '../containers/Garage';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.addCar(this.props.garage, values, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  };
  render () {
    return (
      <div className="cars-new">
        <Garage />
        <Link to="/">
          Back to cars
        </Link>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
            <Field
              className="form-control"
              name="brand"
              type="text"
              component="input"
              placeholder="Aston Martin"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <Field
              className="form-control"
              name="model"
              type="text"
              component="input"
              placeholder="DB Mark III"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
            <Field
              className="form-control"
              name="owner"
              type="text"
              component="input"
              placeholder="James Bond"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
            <Field
              className="form-control"
              name="plate"
              type="text"
              component="input"
              placeholder="DB Mark III"
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
          >
            Add car
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { garage: reduxState.garage };
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { addCar })(CarsNew)
);
