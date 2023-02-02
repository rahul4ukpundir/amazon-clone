import { createContext, useContext, useReducer } from "react";
import { filterReducer, filterInitialState } from "../DataLayer/filterReducer";
import productReducer, { initialState } from "../DataLayer/reducer";
import { userInitialState, userReducer } from "./userReduce";

export const DataLayerContext = createContext();

export const DataLayer = ({ children }) => {
  const [productState, dispatch] = useReducer(productReducer, initialState);
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterInitialState
  );
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);

  const valueObject = { 
                        productState, dispatch,
                        filterState, filterDispatch,
                        userState, userDispatch
                       };

  return (
    <DataLayerContext.Provider value={valueObject}>
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);
