import { createAction } from 'redux-actions';

let todoIdCount = 0;
export const ADD_TODO = createAction('ADD_TODO', text => ({
  text,
  id: todoIdCount++,
  isComplete: false
}));
export const DELETE_TODO = createAction('DELETE_TODO', id => id);
export const COMPLETE_TODO = createAction('COMPLETE_TODO', id => id);
export const FILTER_TODO = createAction('FILTER_TODO', filter => filter);
export const CLEAR_TODO = createAction('CLEAR_TODO', () => {
  todoIdCount = 0;
});