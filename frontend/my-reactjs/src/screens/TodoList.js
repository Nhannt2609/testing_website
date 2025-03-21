import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
      <button className="btn btn-primary">Add Task</button>
    </div>
  );
}

export default TodoList;