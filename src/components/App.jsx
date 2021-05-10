import React from 'react';

import CarList from '../containers/CarList';
import Garage from '../containers/Garage';

const App = (props) => {
  return (
    <div className="app">
      <Garage />
      <CarList garageFromParams={props.match.params.garage} />
    </div>
  );
};

export default App;
