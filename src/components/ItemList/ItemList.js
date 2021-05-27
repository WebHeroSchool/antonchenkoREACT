import React from 'react';
import Item from '../Item/Item';
import List from '@material-ui/core/List';

const ItemList = ({ items, onClickDone }) => (<List>
  {items.map(item => <li key={item.value}>
      <Item value={item.value} isDone={item.IsDone} onClickDone={onClickDone} />
  </li>)}
</List>);


export default ItemList;