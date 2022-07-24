import React, { createContext, useReducer, useContext } from "react";
import {cartReducer} from "../reducers/cart";
import {filterReducer} from "../reducers/filter";
import {userReducer} from "../reducers/user";


const Cart = createContext();



const Context = ({ children }) => {



 
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const [userState, userDispatch] = useReducer(userReducer, {
    username: ""
  });

  
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sort: "",
  });
  

  return <Cart.Provider value={{ state, dispatch, filterState, filterDispatch, userState, userDispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
