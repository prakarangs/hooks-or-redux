import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { rootReducer, initialState, init } from './reducers';
import { asyncer } from './middlewares';

const GlobalStore = createContext({});

export const useGlobalStore = () => useContext(GlobalStore);

export default function Provider({ children }) {
  const [state, dispatchBase] = useReducer(rootReducer, initialState, init);

  const dispatch = useCallback(asyncer(dispatchBase, state), []);

  return <GlobalStore.Provider value={{ state, dispatch }}>{children}</GlobalStore.Provider>;
}
