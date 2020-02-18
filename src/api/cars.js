import Axios from "axios";

export const fetchCarsApi = async () => {
    return Axios.get('http://localhost:3000/cars');
};
