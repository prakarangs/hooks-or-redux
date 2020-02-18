import carsReducer from './cars/index';
import { logger } from './middlewares';

export const initialState = {
  cars: carsReducer.initialState
};

// It lets you extract the logic for calculating the initial state outside the reducer. This is also handy for resetting the state later in response to an action:
export const init = initialState => {
  return initialState;
};

export const rootReducer = (state, action) => {
  const { cars } = state;

  const currentState = {
    cars: carsReducer.reducer(cars, action)
  };

  // Middlewares
  logger(action, state, currentState);

  return currentState;
};
