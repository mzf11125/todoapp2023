import React from 'react';
import './App.css'; // Import your CSS file for TodoList

function TodoList({ todos, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span>{todo.title}</span>
          <button onClick={() => onDelete(todo.id)}>x</button> {/* Change the Delete button */}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
