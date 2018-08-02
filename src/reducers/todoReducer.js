import * as type from '../constants';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case type.createTodoItem:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
        },
      ];

    case type.editTodoItem:
      return state.map(
        todo =>
          todo.id !== action.payload.id
            ? todo
            : { ...todo, text: action.payload.text },
      );

    case type.deleteTodoItem:
      return state.filter(todo => todo.id !== action.payload.id);

    default:
      return state;
  }
};

export default todoReducer;
