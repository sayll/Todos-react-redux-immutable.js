import { Map } from 'immutable';
import createReducer from './createReducer';
import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  FILTER_TODO,
  CLEAR_TODO
} from '../actions';

const todos = createReducer([], {
  /**
   *  @AddTodo 组件的业务逻辑
   **/

  [ADD_TODO](state, action) {
    console.log(action);
    return state.push(Map(action.payload));
  },

  /**
   *  @TODO 组件的业务逻辑
   **/

  [DELETE_TODO](state, action) {
    return state.filter(todo => todo.get('id') !== action.payload);
  },

  [COMPLETE_TODO](state, action) {
    return state.map(todo => {
      // 切换 isComplete 状态
      if (todo.get('id') === action.payload) {
        return todo.update('isComplete', v => !v);
      }
      return todo;
    });
  },

  /**
   * Footer 组件业务逻辑
   * */

  [CLEAR_TODO](state) {
    return state.clear();
  }
});

const todoFilter = createReducer('ALL', {
  /**
   *  @Footer 组件的业务逻辑
   **/

  [FILTER_TODO](state, action) {
    return action.payload;
  },
});

export default {
  todos,
  todoFilter
};
