import uid from 'uid';
import * as type from './actionsType';

export const createTodo = text => ({
  type: type.createTodoItem,
  id: uid(),
  text,
});

export const editTodo = (id, text) => ({
  type: type.editTodoItem,
  id,
  text,
});

export const deleteTodo = id => ({
  type: type.deleteTodoItem,
  id,
});
