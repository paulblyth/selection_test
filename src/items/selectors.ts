import { AppState } from "../store";

export const itemsSelector = (state: AppState) => state.list;
export const selectedItemSelector = (state: AppState) => itemsSelector(state).find(i => i.id === state.selectedId);
