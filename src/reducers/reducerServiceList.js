import {
  NEW_ITEM_LIST,
  REMOVE_ITEM_LIST,
  EDIT_ITEM_LIST,
  } from "../actions/actionTypes";

import { nanoid } from "nanoid";
const initialState = [{ id: nanoid(8), name: "Замена стекла", price: "3000" }];

const reducerServiceList = (state = initialState, action) => {
  switch (action.type) {
    case NEW_ITEM_LIST:
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price }];
    case REMOVE_ITEM_LIST:
      const id = action.payload;

      return state.filter((item) => item.id !== id);
    case EDIT_ITEM_LIST:
      const idx = state.findIndex((item) => item.id === action.payload.id);
      const copyState = state;
      copyState[idx] = action.payload;

      return [...copyState];

    default:
      return state;
  }
};

export default reducerServiceList;
