import React from 'react';

const Car = ({ car }) => {
  return (
    <div className="card-car">
      <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
      <div className="card-car-infos">
        <h3>{car.brand} - {car.model}</h3>
        <p>Owner: {car.owner}</p>
      </div>
    </div>
  );
};

export default Car;
