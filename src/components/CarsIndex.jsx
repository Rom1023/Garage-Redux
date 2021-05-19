import React from 'react';
import { Link } from 'react-router-dom';

import CarList from '../containers/CarList';
import Garage from '../containers/Garage';

const CarsIndex = () => {
  return (
    <div className="cars-index d-flex w-100">
      <div className="col-4">
        <Garage className="garage" />
        <Link to="/cars/new" className="btn btn-primary">
          Add a car
        </Link>
      </div>
      <div className="flex-grow-1 ml-3">
        <CarList />
      </div>
    </div>
  );
};

export default CarsIndex;
