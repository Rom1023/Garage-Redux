import React from 'react';

import CarList from '../containers/CarList';
import Garage from '../containers/Garage';

const CarsIndex = (props) => {
  return (
    <div className="cars-index">
      <Garage />
      <CarList garageFromParams={props.match.params.garage} />
    </div>
  );
};

export default CarsIndex;
