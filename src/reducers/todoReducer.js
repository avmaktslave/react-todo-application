import * as type from '../constants';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case type.createTodoItem:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];
    case type.editTodoItem:
      return state.map(
        todo => (todo.id !== action.id ? todo : { ...todo, text: action.text }),
      );
    case type.deleteTodoItem:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

export default todoReducer;
