import React, { PropTypes, PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import './global-style';

class AddTodo extends PureComponent {
  static propTypes() {
    return {
      todo: ImmutablePropTypes.list.isRequired,
      $COMPLETE_TODO: PropTypes.func.isRequired,
      $DELETE_TODO: PropTypes.func.isRequired
    };
  }

  componentWillMount() {
    console.info(`%cToDo mounting- ID: ${this.props.todo.get('id')}`, 'color:green; font-weight:bold;');
  }

  componentWillUpdate(nextProps) {
    console.info(`%cToDo updating - ID: ' ${nextProps.todo.get('id')}`, 'color:blue; font-weight:bold;');
  }

  componentWillUnmount() {
    console.info(`%cToDo unmounting - ID: ${this.props.todo.get('id')}`, 'color:orange; font-weight:bold;');
  }

  handleCompleteTodo(e) {
    e.stopPropagation();
    this.props.$COMPLETE_TODO(this.props.todo.get('id'));
    return false;
  }

  handleDeleteTodo(e) {
    e.stopPropagation();
    this.props.$DELETE_TODO(this.props.todo.get('id'));
    return false;
  }

  render() {
    const { todo } = this.props;
    return (
      <li
        className={todo.get('isComplete') ? 'todo complete' : 'todo'}
        onClick={e => this.handleCompleteTodo(e)}
      >
        <span>{todo.get('text')}</span>
        <a
          href="###"
          className="rt"
          onClick={e => this.handleDeleteTodo(e)}
        >x</a>
      </li>
    );
  }
}

export default AddTodo;