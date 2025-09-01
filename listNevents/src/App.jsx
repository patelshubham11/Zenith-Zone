import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className="todo-title">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;