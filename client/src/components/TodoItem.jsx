import React from 'react';

const TodoItem = (props) => (
  <div className={"todo-item-wrapper"}><li className={"todo-item"}>
    <div className={"todo-item-name"}>{props.data.itemName}</div>
    <div className={"todo-item-contents"}>{props.data.itemContents}</div>
  </li></div>
);

module.exports = TodoItem;