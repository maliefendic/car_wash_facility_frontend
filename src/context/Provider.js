import React from "react";

const actions = {
  SET_ROLE: "SET_ROLE",
  SET_USER_ID: "SET_USER_ID",
};
function reducer(state, action) {

  switch (action.type) {
    case actions.SET_ROLE:
      return { ...state, role: action.value };
    case actions.SET_USER_ID:
      return { ...state, userId: action.value };
    default:
      return state;
  }
}

export const WashContext = React.createContext();
const VALUE = {
  role: "",
  userId: "",
};

function Provider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, VALUE);

  const value = {
    role: state.role,
    userId: state.userId,
    dispatch,
  };
  return <WashContext.Provider value={value}> {children}</WashContext.Provider>;
}

export default Provider;
