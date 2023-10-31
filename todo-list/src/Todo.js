// Todo.js
//  Main file for the website
import React from 'react';

const Todo = ({ todo, onDelete }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
