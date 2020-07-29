import { v4 } from "uuid";
import faker from "faker";
import { createSlice } from "@reduxjs/toolkit";
import { Item } from "./types";

type ItemsState = {
  list: Item[];
};

const initialState: ItemsState = {
  list: []
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
      return;
    }
  }
});
