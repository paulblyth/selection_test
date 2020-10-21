import React from "react";
import { Item } from "./items/types";
import "./App.css";
import { connect } from "react-redux";
import { itemsSelector, selectedItemSelector } from "./items/selectors";
import { AppState } from "./store";
import items from "./items";
import { ItemLi } from "./Item";

const mapState = (state: AppState) => ({
  items: itemsSelector(state),
  selectedItem: selectedItemSelector(state),
});

const mapDispatch = {
  addItem: items.actions.addItem,
  clearSelection: items.actions.clearSelection,
  deleteItem: items.actions.deleteItem,
  selectItem: items.actions.selectItem,
};

type Props = {
  addItem: () => void;
  clearSelection: () => void;
  deleteItem: (item: Item) => void;
  items: Item[];
  selectItem: (item: Item) => void;
  selectedItem?: Item;
};

const App = connect(
  mapState,
  mapDispatch
)((props: Props) => {
  const {
    addItem,
    clearSelection,
    deleteItem,
    items,
    selectItem,
    selectedItem,
  } = props;
  return (
    <div className="App">
      <h1>Items App!</h1>
      <button
        className="addItem"
        disabled={items.length >= 10}
        onClick={() => addItem()}
      >
        Add Item
      </button>
      <div className="content">
        <div className="items">
          <h2>ITEMS</h2>
          {items.length > 0 ? (
            <ul>
              {items.map((i) => (
                <ItemLi
                  key={i.id}
                  item={i}
                  onDelete={() => deleteItem(i)}
                  onSelect={() => selectItem(i)}
                  selected={selectedItem?.id === i.id}
                />
              ))}
            </ul>
          ) : (
            "No items"
          )}
        </div>
        <div className="selectedItem">
          <h2>SELECTED ITEM INFO</h2>
          {selectedItem && (
            <>
              <div>{selectedItem.description}</div>
              <button onClick={() => clearSelection()}>Remove</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
});

export default App;
