import React from "react";
import { Item } from "./items/types";

type Props = {
  item: Item;
};

export const ItemLi = ({ item }: Props) => {
  return <li className="item">{item.name}</li>;
};
