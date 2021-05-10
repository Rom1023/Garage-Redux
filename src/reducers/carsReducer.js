import { FETCH_CARS, ADD_CAR } from '../actions';

const carsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CARS :
      return action.payload;
    case ADD_CAR : {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    default:
      return state;
  }
};

export default carsReducer;
