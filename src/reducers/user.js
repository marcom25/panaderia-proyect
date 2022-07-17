import {UPDATE_USER} from "../actions/user";

export const initialState = {
  username: ""
}

export const userReducer = (state, action) => {
    switch (action.type) {
      case UPDATE_USER:
        return {...state, username: action.payload}
    
      default:
        return state;
    }
  
  }