import React from 'react';

import TodoItem from './TodoItem.jsx';

const TodoList = (props) => (<div>{
  props.todoItems.map((itemData, itemId) => 
    (<TodoItem data={itemData} id={itemId} />)
  )
}</div>);

module.exports = TodoList;
