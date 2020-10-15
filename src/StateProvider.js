//setup data layer
//we need this to track the basket
import React, { createContext, useContext, useReducer } from "react"; //cuu
//This is data layer
export const StateContext = createContext(); //create data layer

//Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
