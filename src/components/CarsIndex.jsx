import React from 'react';
import { Link } from 'react-router-dom';

import CarList from '../containers/CarList';
import Garage from '../containers/Garage';

const CarsIndex = () => {
  return (
    <div className="cars-index">
      <div className="left-scene">
        <Garage className="garage" />
        <Link to="/cars/new" className="btn btn-primary">
          Add a car
        </Link>
      </div>
      <div className="right-scene">
        <CarList />
      </div>
    </div>
  );
};

export default CarsIndex;
