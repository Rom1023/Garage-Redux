import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { addCar } from '../actions';

import Garage from '../containers/Garage';

const required = (value) => {
  return value ? undefined : 'Required';
};

const maxLength = (max) => {
  return (value) => {
    return value && value.length > max ? `Must be ${max} characters or less` : undefined;
  };
};

const minLength = (min) => {
  return (value) => {
    return value && value.length < min ? `Must be ${min} characters or more` : undefined;
  };
};

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.addCar(this.props.garage, values, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  };

  renderField = ({ input, type, placeholder, className, meta: { touched, error, warning } }) => (
    <div>
      <input {...input} placeholder={placeholder} type={type} className={className} />
      {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span className="text-warning">{warning}</span>))}
    </div>
  );
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
              placeholder="Aston Martin"
              component={this.renderField}
              validate={required}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <Field
              className="form-control"
              name="model"
              type="text"
              placeholder="DB Mark III"
              component={this.renderField}
              validate={required}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
            <Field
              className="form-control"
              name="owner"
              type="text"
              placeholder="James Bond"
              component={this.renderField}
              validate={[required, maxLength(15), minLength(3)]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
            <Field
              className="form-control"
              name="plate"
              type="text"
              placeholder="DB Mark III"
              component={this.renderField}
              validate={required}
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
