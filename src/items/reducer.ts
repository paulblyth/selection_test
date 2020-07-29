import { v4 } from "uuid";
import faker from "faker";
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  initialState: [],
  name: "items",
  reducers: {
    addItem(state: { id: string; name: string; description: string }[]) {
      state.push({
        id: v4(),
        name: faker.name.title(),
        description: faker.name.jobDescriptor()
      });
      return;
    }
  }
});
