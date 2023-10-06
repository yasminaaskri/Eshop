import React , {createContext,useContext,useReducer} from "react";



// Create a context to store your global state
export const StateContext = createContext();


// Create a context provider component that will handle your global state
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
  

//reducer: A reducer function to handle actions and update the state.
//initialState: The initial state of your application.
//children: The child components that will have access to this global state



// Create a custom hook to access the global state from any component
export const useStateValue = () =>useContext(StateContext);