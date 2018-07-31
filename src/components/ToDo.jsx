import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const ToDo = () => (
  <div className="todo-wrap">
    <h1>Todo</h1>
    <TodoForm />
    <TodoList />
  </div>
);

export default ToDo;
