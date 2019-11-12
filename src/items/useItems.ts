import { Item } from "./types";

type ItemsHook = {
  items: Array<Item>;
};

const initialState: Array<Item> = [
  {
    id: "1",
    name: "One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: "2",
    name: "Two",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: "3",
    name: "Three",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
];

export const useItems = (): ItemsHook => {
  return {
    items: initialState
  };
};

