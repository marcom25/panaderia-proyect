import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CART_QTY} from "../actions/cart";

export const initialState = {
  cart: [],
}

export const cartReducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
  
      case REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((i) => i.id !== action.payload.id),
        };
      case CHANGE_CART_QTY:
        return {
          ...state,
          cart: state.cart.filter((i) =>
            i.id === action.payload.id ? (i.qty = action.payload.qty) : i.qty
          ),
        };
      default:
        return state;
    }
  };