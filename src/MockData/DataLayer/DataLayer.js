import { createContext, useContext, useReducer } from 'react'
import { filterReducer, filterInitialState } from '../DataLayer/filterReducer';
import productReducer, { initialState } from "../DataLayer/reducer"

export const DataLayerContext = createContext();



export const DataLayer = ({ children }) => {
    const [productState, dispatch] = useReducer(productReducer, initialState);
    const [filterState, filterDispatch] = useReducer(filterReducer, filterInitialState);

    return <DataLayerContext.Provider value={{ productState, dispatch, filterState, filterDispatch }}
    >
        {children}
    </DataLayerContext.Provider>
}


export const useDataLayerValue = () => useContext(DataLayerContext);