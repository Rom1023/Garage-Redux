import React from 'react';

const Car = ({ car }) => {
  return (
    <div>
      <h3>{car.brand} - {car.model}</h3>
      <p>Owner: {car.owner}</p>
    </div>
  );
};

export default Car;
