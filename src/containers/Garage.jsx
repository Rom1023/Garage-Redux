import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class Garage extends Component {
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
