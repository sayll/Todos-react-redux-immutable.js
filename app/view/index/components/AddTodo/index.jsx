import React, { PropTypes, Component } from 'react';
import Input from './Input';

class AddTodo extends Component {
  static propTypes() {
    return {
      $ADD_TODO: PropTypes.func.isRequired
    };
  }

  static shouldComponentUpdate() {
    return false;
  }

  handleAddTodo(e) {
    e.preventDefault();
    if (this.input.value) {
      this.props.$ADD_TODO(this.input.value);
      this.input.value = '';
    }
  }

  render() {
    return (
      <form className="addTodoForm" onSubmit={e => this.handleAddTodo(e)}>
        <Input
          type="text" placeholder="Enter Todo"
          innerRef={e => {
            this.input = e;
          }}
        />
      </form>
    );
  }
}

export default AddTodo;