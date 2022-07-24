import { createContext, useContext, useReducer } from "react";
import {
  ADD_TO_CART,
  CHANGE_CART_QTY,
  REMOVE_FROM_CART,
} from "../actions/cart";
import { cartReducer, initialState } from "../reducers/cart";

export const CartContext = createContext();
const { Provider } = CartContext;

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const cart = state.cart;

  const addToCart = (card) => {
    dispatch({
      type: ADD_TO_CART,
      payload: card,
    });
  };

  const removeFromCart = (prod) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: prod,
    });
  };

  const changeCartQty = (id, qty) => {
    dispatch({
      type: CHANGE_CART_QTY,
      payload: {
        id,
        qty,
      },
    });
  };

  

  return (
    <Provider value={{ cart, addToCart, removeFromCart, changeCartQty }}>
      {children}
    </Provider>
  );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be wrapped wthin CartProvider");
    return context;
}