import React, { PropTypes, PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { DELETE_TODO, COMPLETE_TODO, ADD_TODO, FILTER_TODO, CLEAR_TODO } from '../actions';
import Todo from '../components/Todo';
import AddTodo from '../components/AddTodo';
import Footer from '../components/Footer';

class TodoList extends PureComponent {
  static propTypes() {
    return {
      todoList: ImmutablePropTypes.list.isRequired,
      todoFilter: PropTypes.string.isRequired,
      ADD_TODO: PropTypes.func.isRequired,
      CLEAR_TODO: PropTypes.func.isRequired,
      COMPLETE_TODO: PropTypes.func.isRequired,
      DELETE_TODO: PropTypes.func.isRequired,
      FILTER_TODO: PropTypes.func.isRequired,
    };
  }

  handleFilterTodo(filter) {
    switch (filter) {
      case 'COMPLETE':
        return this.props.todoList.filter(todo => todo.get('isComplete'));
      case 'ACTION':
        return this.props.todoList.filter(todo => !todo.get('isComplete'));
      default:
        return this.props.todoList;
    }
  }

  render() {
    this.todos = this.handleFilterTodo(this.props.todoFilter);
    return (
      <div>
        <h1>TODO LIST DEMO</h1>
        <AddTodo $ADD_TODO={this.props.ADD_TODO} />
        <ul className="todoList">
          {
            this.todos.map(todo => (
              <Todo
                key={todo.get('id')}
                todo={todo}
                $DELETE_TODO={this.props.DELETE_TODO}
                $COMPLETE_TODO={this.props.COMPLETE_TODO}
              />
            ))
          }
        </ul>
        <Footer
          handleFilterTodo={filter => this.props.FILTER_TODO(filter)}
          todoFilter={this.props.todoFilter}
          $FILTER_TODO={this.props.FILTER_TODO}
          $CLEAR_TODO={this.props.CLEAR_TODO}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  ADD_TODO,
  CLEAR_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  FILTER_TODO,
})(TodoList);