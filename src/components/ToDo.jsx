import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { todowrap } from './ToDo.css';

const ToDo = () => (
  <div className={todowrap}>
    <h1>Todo</h1>
    <TodoForm />
    <TodoList />
  </div>
);

export default ToDo;
