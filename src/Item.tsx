import React from "react";
import { Item } from "./items/types";

type Props = {
  item: Item;
  onDelete: () => void;
  onSelect: () => void;
  selected: boolean;
};

export const ItemLi = ({ item, onDelete, onSelect, selected }: Props) => {
  return (
    <li
      className="item"
      data-id={item.id}
      data-name={item.name}
      data-description={item.description}
    >
      {item.name}{" "}
      <div className="controlButtons">
        <button disabled={selected} onClick={onSelect}>
          Select
        </button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};
