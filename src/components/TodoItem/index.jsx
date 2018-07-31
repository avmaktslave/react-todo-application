import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import Button from '../Button';
import { editTodo, deleteTodo } from '../../actions/actions';

class TodoItem extends Component {
  static propTypes = {
    text: string.isRequired,
    id: string.isRequired,
    deleteTodo: func.isRequired,
    editTodo: func.isRequired,
  };

  constructor(props) {
    super(props);
    const { text } = this.props;
    this.state = {
      editingText: text,
      isShown: false,
    };
  }

  onEdit = () => {
    this.setState({ isShown: true });
  };

  onDelete = () => {
    const { id, deleteTodo } = this.props;
    deleteTodo(id);
  };

  editHandler = e => {
    this.setState({ editingText: e.target.value });
  };

  saveEditedText = () => {
    const { editTodo, id } = this.props;
    const { editingText } = this.state;
    editTodo(id, editingText);
    this.setState({ isShown: false });
  };

  render() {
    const { text } = this.props;
    const { editingText, isShown } = this.state;
    return (
      <li>
        {text}
        {isShown && (
          <div className="textAreaWrap">
            <textarea
              cols="30"
              rows="5"
              value={editingText}
              onChange={this.editHandler}
            />
            <Button text="Save" onClick={this.saveEditedText} />
          </div>
        )}
        <Button text="Edit" onClick={this.onEdit} />
        <Button text="Delete" onClick={this.onDelete} />
      </li>
    );
  }
}

const mapDispatchToProps = {
  editTodo,
  deleteTodo,
};

export default connect(
  null,
  mapDispatchToProps,
)(TodoItem);
