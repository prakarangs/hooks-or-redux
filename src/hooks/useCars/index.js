import { useGlobalStore } from '../../store';
import bindActions from '../../store/bindActions';

import carsReducer from '../../store/cars';

const { actions } = carsReducer;

const useCars = () => {
  const { state, dispatch } = useGlobalStore();
  // List of Props
  const { cars } = state;
  // List of Actions
  const { fetchCars } = actions;
  const carsActions = bindActions({ fetchCars }, dispatch);

  return { cars, ...carsActions };
};

export default useCars;
