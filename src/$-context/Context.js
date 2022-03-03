import React, { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./Reducer";

const Cart = createContext();

const Context = async ({ children }) => {

    let data = {};
    
    try {
        const res = await fetch("http://localhost:8080/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Acces-Control-Allow_Origin": "localhost:3000",
            },
            mode: "cors",
        });
        
        data = await res.json();
        
        console.log(data.data);
    } catch (error) {
        console.log(error);
    }
    
    const [state, dispatch] = useReducer(cartReducer, {
      products: data.data,
      cart: [],
    });
    
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
