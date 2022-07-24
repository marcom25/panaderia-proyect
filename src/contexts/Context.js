import React, { createContext, useReducer, useContext } from "react";
import { cartReducer, filterReducer, userReducer } from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    username: "",
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sort: "",
  });

  return (
    <Cart.Provider
      value={{ filterState, filterDispatch, userState, userDispatch }}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
