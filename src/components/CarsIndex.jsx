import React from 'react';
import { Link } from 'react-router-dom';

import CarList from '../containers/CarList';
import Garage from '../containers/Garage';

const CarsIndex = (props) => {
  return (
    <div className="cars-index">
      <Garage />
      <Link to="/cars/new">
        Add a car
      </Link>
      <CarList />
    </div>
  );
};

export default CarsIndex;
