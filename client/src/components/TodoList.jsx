import React from 'react';

import TodoItem from './TodoItem.jsx';

const TodoList = (props) => (<div><ul className={"todo-list"}>{
  props.todoItems.map((itemData, itemId) => 
    (<TodoItem data={itemData} id={itemId} />)
  )
}</ul></div>);

module.exports = TodoList;
