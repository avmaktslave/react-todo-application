import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { createTodo } from '../../actions/actions';
import Button from '../Button';

class TodoForm extends Component {
  inputText = React.createRef();

  static propTypes = {
    createTodo: func.isRequired,
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
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" onChange={this.changeHandler} ref={this.inputText} />
        <Button text="Add Todo" />
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
)(TodoForm);
