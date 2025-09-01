import React from 'react';

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}
      <div>
        <button onClick={() => toggleTodo(index)}>
          {todo.isCompleted ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;