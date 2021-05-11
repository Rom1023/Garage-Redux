import React, { Component } from 'react';
import { connect } from 'react-redux';

class Garage extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.garage}</h2>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { garage: reduxState.garage };
}

export default connect(mapStateToProps)(Garage);
