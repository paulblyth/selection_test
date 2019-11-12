import React from 'react';
import { useItems } from './items';
import { Item } from './items/types';
import './App.css';

const ItemLi = (props: Item) => {
  return (
    <li key={props.id} className="item">{props.name}</li>
  )
}

const App: React.FC = () => {
  const { items } = useItems();

  return (
    <div className="App">
      <ul>
        {items.map(ItemLi)}
      </ul>
      <div className="selectedItem">
        SELECTED ITEM INFO
      </div>
    </div>
  );
}

export default App;
