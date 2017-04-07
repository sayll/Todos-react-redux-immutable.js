import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import TodoList from './TodoList';

function App({ todoList }) {
  return (
    <div>
      <div style={{ background: 'rgba(0, 0, 0, 0.075)', padding: '20px', border: '1px solid #ccc' }}>
        <TodoList todoList={todoList} />
      </div>
      <p style={{ fontSize: '14px' }}>
        <strong className="rt">
          <a href="https://github.com/sayll">Sayll</a>
        </strong>
        <span className="rt">by&nbsp;</span>
      </p>
    </div>
  );
}

App.propTypes = {
  todoList: ImmutablePropTypes.list.isRequired
};

function mapStateToProps(state) {
  return {
    todoList: state.todos
  };
}
export default connect(mapStateToProps, {})(App);