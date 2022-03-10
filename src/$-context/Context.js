import React, { createContext, useReducer, useContext } from "react";
import { cartReducer, filterReducer, userReducer } from "./Reducer";

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
    byBakery: "",
    byHotDrinks: ""
  });
  

  return <Cart.Provider value={{ state, dispatch, filterState, filterDispatch, userState, userDispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
