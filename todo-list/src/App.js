import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Add sort order state

  useEffect(() => {
    // Fetch todos from the API when the component mounts
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  const addTodo = () => {
    if (text.trim() === '') return;

    const newTodo = {
      title: text,
      completed: false,
    };

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos, data]);
        setText('');
      })
      .catch((error) => console.error('Error adding todo:', error));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const sortTodos = () => {
    // Sort the todos based on the current sortOrder
    const sortedTodos = [...todos];
    if (sortOrder === 'asc') {
      sortedTodos.sort((a, b) => b.id - a.id); // Sort by id in descending order (newest to oldest)
      setSortOrder('desc');
    } else {
      sortedTodos.sort((a, b) => a.id - b.id); // Sort by id in ascending order (oldest to newest)
      setSortOrder('asc');
    }
    setTodos(sortedTodos);
  };
  

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <button onClick={sortTodos}>Sort</button> {/* Add the sort button */}
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
