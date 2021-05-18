import React from 'react';

const Car = ({ car }) => {
  return (
    <div className="card-car">
      <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
      <div className="card-car-infos">
        <h3>{car.brand} - {car.model}</h3>
        <p>Owner: {car.owner}</p>
      </div>
    </div>
  );
};

export default Car;
