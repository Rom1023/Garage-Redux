import React, { Component } from 'react';
import { connect } from 'react-redux';

class Garage extends Component {
  render () {
    return (
      <div>
        <h2>Welcome to {this.props.garage}</h2>
        <p>Our garage is the best. Reasonnable prices, always on time, we are the best (and fictionnal)</p>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { garage: reduxState.garage };
}

export default connect(mapStateToProps)(Garage);
