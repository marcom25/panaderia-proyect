import {SORT} from "../actions/filter";

export const initialState = {
  sort: ""
}

export const filterReducer = (state, action) => {
    switch (action.type) {
      case SORT:
        return { ...state, sort: action.payload };
      default:
        return state;
    }
  };