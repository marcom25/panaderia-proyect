import React, { createContext, useReducer, useContext, useState } from "react";
import {cartReducer} from "../reducers/cart";
import {filterReducer} from "../reducers/filter";
import {userReducer} from "../reducers/user";


const Cart = createContext();

const Context = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    username: "",
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sort: "",
  });

  const [selectedItem, setSelectedItem] = useState("");

  const onChangeSelectedItem = (item) => {
    setSelectedItem(item)
  }

  return (
    <Cart.Provider
      value={{ filterState, filterDispatch, userState, userDispatch, onChangeSelectedItem, selectedItem }}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
