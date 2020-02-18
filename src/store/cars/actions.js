import { fetchCarsApi } from '../../api/cars';

export function getCars(cars) {
  return {
    type: 'GET_CARS',
    payload: cars
  };
}

export function error(err) {
  return {
    type: 'ERROR',
    payload: err
  };
}

export const fetchCars = () => {
  return async function(dispatch) {
    try {
      const { data } = await fetchCarsApi();
      dispatch(getCars(data));
    } catch (e) {
      dispatch(error(e));
    }
  };
};
