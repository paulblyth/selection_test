import React from "react";
import { Dispatch } from "redux";
import { Item } from "./items/types";
import "./App.css";
import { connect } from "react-redux";
import { itemsSelector } from "./items/selectors";
import { AppState } from "./store";
import items from "./items";
import { ItemLi } from "./Item";

const mapState = (state: AppState) => ({
  items: itemsSelector(state)
});

const mapDispatch = (dispatch: Dispatch) => ({
  addItem: () => dispatch(items.actions.addItem())
});

type Props = {
  items: Item[];
  addItem: any;
};

const App = connect(
  mapState,
  mapDispatch
)(({ items, addItem }: Props) => {
  return (
    <div className="App">
      <button onClick={() => addItem()}>Add Item</button>
      <div className="content">
        <ul>
          {items.map(i => (
            <ItemLi key={i.id} item={i} />
          ))}
        </ul>
        <div className="selectedItem">SELECTED ITEM INFO</div>
      </div>
    </div>
  );
});

export default App;
