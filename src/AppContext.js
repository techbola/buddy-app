import React from "react";

const userData = localStorage.getItem("userData");

const useController = () => {
  const initialState = {
    userDetails: userData ? JSON.parse(userData).userDetails : {},
    opt: userData ? JSON.parse(userData).opt : null,
    token: userData ? JSON.parse(userData).token : null,
  };

  const [state, dispatch] = React.useReducer(
    (state, value) => ({ ...state, ...value }),
    initialState
  );

  return { state, dispatch };
};

export const AppContext = React.createContext({});

export default useController;
