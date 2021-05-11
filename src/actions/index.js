// TODO: add and export your own actions
const BASE_URL = 'https://wagon-garage-api.herokuapp.com/';

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const ADD_CAR = 'ADD_CAR';

export const fetchCars = (garage) => {
  const promise = fetch(`${BASE_URL}${garage}/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
};

export const fetchCar = (id) => {
  const promise = fetch(`${BASE_URL}/cars/${id}`)
    .then(response => response.json());
  return {
    type: FETCH_CAR,
    payload: promise
  };
};

export const addCar = (garage, body, callback) => {
  // const body = { brand, model, owner, plate };
  const promise = fetch(`${BASE_URL}${garage}/cars`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(callback);
  return {
    type: ADD_CAR,
    payload: promise
  };
};

