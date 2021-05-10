import FETCH_CARS from '../actions';

export const carsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARS :
      return action.payload;
    default:
      return state;
  }
};
