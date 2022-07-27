import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    default:
      return state;
  }
};

const initialState = {
  users: [],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addUser = (user) => {
    dispatch({ type: "ADD_USER", payload: user });
  };

  return (
    <AppContext.Provider value={{ users: state.users, addUser }}>
      {props.children}
    </AppContext.Provider>
  );
};
