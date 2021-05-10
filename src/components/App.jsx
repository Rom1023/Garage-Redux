import React from 'react';

import CarList from '../containers/CarList';

const App = (props) => {
  return (
    <div className="app">
      <CarList garageFromParams={props.match.params.garage} />
    </div>
  );
};

export default App;
