import * as React from 'react';
import map from 'lodash/map';
import useCars from '../hooks/useCars';
import { useEffect } from 'react';

const Cars = () => {
  const { cars, fetchCars } = useCars();

  useEffect(() => {
    fetchCars();
  }, []);

  if (cars.length !== 0) {
    return (
      <ul>
        {map(cars, car => (
          <li key={car.id}>
            {car.name} in {car.color}
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default Cars;
