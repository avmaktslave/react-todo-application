import uid from 'uid';
import * as type from '../constants';

export const createTodo = text => ({
  type: type.createTodoItem,
  payload: {
    id: uid(),
    text,
  },
});

export const editTodo = (id, text) => ({
  type: type.editTodoItem,
  payload: {
    id,
    text,
  },
});

export const deleteTodo = id => ({
  type: type.deleteTodoItem,
  payload: {
    id,
  },
});
