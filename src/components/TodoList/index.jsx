import React from 'react';
import PropTypes, { shape, string } from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} text={todo.text} id={todo.id} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    shape({
      id: string.isRequired,
      text: string.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(TodoList);
