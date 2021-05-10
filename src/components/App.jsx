import React from 'react';

import CarList from '../containers/CarList';

const App = (props) => {
  return (
    <CarList garageFromParams={props.match.params.garage} />
  );
};

export default App;
