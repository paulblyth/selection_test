import { AppState } from "../store";

export const itemsSelector = (state: AppState) => state.list;
