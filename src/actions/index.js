// TODO: add and export your own actions
const BASE_URL = 'https://wagon-garage-api.herokuapp.com/';

export const FETCH_CARS = 'FETCH_CARS';

export const fetchcards = (garage) => {
  const promise = fetch(`${BASE_URL}${garage}/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
};
