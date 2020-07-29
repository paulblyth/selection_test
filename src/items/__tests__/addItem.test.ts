import { makeStore } from "../../store";
import items from "../reducer";
import { itemsSelector } from "../selectors";
import { Store } from "@reduxjs/toolkit";

const { actions } = items;

describe("addItem", () => {
  let store: Store;

  beforeEach(() => {
    store = makeStore();
  });

  it("adds an item to the list", () => {
    store.dispatch(actions.addItem());

    const items = itemsSelector(store.getState());

    expect(items).toHaveLength(1);
  });

  it("add multiple items to the list", () => {
    store.dispatch(actions.addItem());
    store.dispatch(actions.addItem());
    store.dispatch(actions.addItem());

    const items = itemsSelector(store.getState());

    expect(items).toHaveLength(3);
  });
});
