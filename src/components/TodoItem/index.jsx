import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import cx from 'classnames';
import Button from '../Button';
import { customCheckbox } from '../TodoInput';
import { textarea, li, span, check } from './styles.css';
import { editTodo, deleteTodo } from '../../actions/todoActions';

class TodoItem extends PureComponent {
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
      checked: false,
    };
  }

  onEdit = () => {
    const { isShown } = this.state;
    this.setState({ isShown: !isShown });
  };

  onDelete = () => {
    const { id, deleteTodo } = this.props;
    deleteTodo(id);
  };

  getChangeColor = checked => (checked === true ? check : undefined);

  checkedHandler = e => {
    if (e.target.checked) this.setState({ checked: true });
    else this.setState({ checked: false });
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
    const { editingText, isShown, checked } = this.state;
    return (
      <li className={cx(li, this.getChangeColor(checked))}>
        <Field
          name="checkbox"
          component={customCheckbox}
          onChange={this.checkedHandler}
        />
        <span className={span}>{text}</span>
        {isShown && (
          <div className="textAreaWrap">
            <textarea
              className={textarea}
              name="text"
              cols="50"
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

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  reduxForm({
    form: 'simple',
  }),
)(TodoItem);
