import React, { createContext, useReducer } from "react";
//initila state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};
//Create Context
export const GlobalContext=createContext(initialState)

//provider Component
export const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducer,initialState)
    
    return(<GlobalContext.Provider/>)
}
