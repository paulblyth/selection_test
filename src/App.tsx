import React from 'react';
import { useItems } from './items';
import { Item } from './items/types';
import './App.css';

type Props = {
  item: Item;
}

const ItemLi = ({ item }: Props) => {
  return (
    <li className="item">{item.name}</li>
  )
}

const App: React.FC = () => {
  const { items } = useItems();

  return (
    <div className="App">
      <ul>
        {items.map(i => <ItemLi key={i.id} item={i} />)}
      </ul>
      <div className="selectedItem">
        SELECTED ITEM INFO
      </div>
    </div>
  );
}

export default App;
