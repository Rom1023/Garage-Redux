import React, { Component } from 'react';
import { connect } from 'react-redux';

class Car extends Component {
  render () {
    return (
      <div>
        <h3>{this.props.cars.brand} - {this.props.cars.model}</h3>
        <p>Owner: {this.props.cars.owner}</p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { cars: reduxState.cars };
}


export default connect(mapStateToProps)(Car);
