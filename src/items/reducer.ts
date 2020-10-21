import { v4 } from "uuid";
import faker from "faker";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "./types";

type ItemsState = {
  list: Item[];
  selectedId: string | null;
};

const initialState: ItemsState = {
  list: [],
  selectedId: null,
};

export default createSlice({
  initialState,
  name: "items",
  reducers: {
    addItem(state) {
      state.list.push({
        id: v4(),
        name: faker.name.title(),
        description: faker.name.jobDescriptor()
      });
    },
    clearSelection(state) {
      state.selectedId = null;
    },
    deleteItem(state, action: PayloadAction<Item>) {
      state.list.splice(state.list.findIndex(i => i.id === action.payload.id), 1);
    },
    selectItem(state, action: PayloadAction<Item>) {
      state.selectedId = action.payload.id;
    },
  }
});
