

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload.id),
      };
    case 'CHANGE_CART_QTY':
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

export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SORT':
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};


export const userReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {...state, username: action.payload}
  
    default:
      return state;
  }

}