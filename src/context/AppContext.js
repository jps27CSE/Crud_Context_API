import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [action.payload, ...state.users],
      };

    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
      };

    case "EDIT_USER":

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

  const removeUser = (id) => {
    dispatch({ type: "REMOVE_USER", payload: id });
  };

  const editUser = (user) => {
    dispatch({ type: "EDIT_USER", payload: user });
  };

  return (
    <AppContext.Provider
      value={{ users: state.users, addUser, removeUser, editUser }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
