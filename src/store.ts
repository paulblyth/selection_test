import { configureStore } from "@reduxjs/toolkit";
import items from "./items";

export const makeStore = () =>
  configureStore({
    reducer: items.reducer
  });

export type AppState = ReturnType<typeof items.reducer>;
