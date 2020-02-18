export const initialState = {};

export const cars = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'GET_CARS': {
      return { ...state, ...payload };
    }
    case 'ERROR': {
      return { ...state, error: payload };
    }
    default: {
      return state;
    }
  }
};

export default cars;
