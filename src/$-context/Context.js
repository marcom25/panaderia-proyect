import React, { createContext, useReducer, useContext } from "react";
import {cartReducer } from "./Reducer";
import data from "../$-products/AllDataProducts"

const Cart = createContext();


const Context = ({ children }) => {


    const [state, dispatch] = useReducer(cartReducer, {
        products: data,
        cart:[]
    });
    console.log(data);


  return ( 
    <Cart.Provider value= {{state, dispatch}}>
        {children}
    </Cart.Provider>);
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
}