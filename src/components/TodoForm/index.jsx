import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { customInput } from '../TodoInput';
import { createTodo } from '../../actions/todoActions';
import Button from '../Button';

class TodoForm extends Component {
  static propTypes = {
    createTodo: func.isRequired,
    reset: func.isRequired,
  };

  state = {
    text: '',
  };

  changeHandler = e => {
    const text = e.target.value;
    this.setState({ text });
  };

  submitHandler = e => {
    e.preventDefault();
    this.AddTodo();
  };

  AddTodo = () => {
    const { text } = this.state;
    const { createTodo } = this.props;
    if (!text) return;
    createTodo(text);
    this.setState({ text: '' });
  };

  render() {
    const { reset } = this.props;
    return (
      <form onSubmit={this.submitHandler}>
        <Field
          name="inputText"
          component={customInput}
          type="text"
          onChange={this.changeHandler}
        />
        <Button text="Add Todo" onClick={reset} />
      </form>
    );
  }
}

const mapDispatchToProps = {
  createTodo,
};

export default connect(
  null,
  mapDispatchToProps,
)(
  reduxForm({
    form: 'register',
  })(TodoForm),
);
