import {
  createTodo, destroyTodo,
  getTodos, updateTodo
} from '../lib/todoServices';

import {
  CURRENT_UPDATE, TODO_ADD, TODO_REMOVE,
  TODO_REPLACE, TODOS_LOAD
} from './actionTypes';

import { showMessage } from '../actions/index';

export const updateCurrent = (value) => {
  return {
    type: CURRENT_UPDATE,
    payload: value
  }
}

export const loadTodos = (todos) => {
  return {
    type: TODOS_LOAD,
    payload: todos
  }
}

export const addTodo = (todo) => {
  return {
    type: TODO_ADD,
    payload: todo
  }
}

export const replaceTodo = (todo) => {
  return {
    type: TODO_REPLACE,
    payload: todo
  }
}

export const removeTodo = (id) => {
  return {
    type: TODO_REMOVE,
    payload: id
  }
}

// since we need to fetch data from the server, which is asynchronous
// so instead of returning an action directly
// redux-thunk returns a function passing in the dispatch function as an argument
// when we successfully get the data from server, we manually dispatch an action object
export const fetchTodos = () => {
  return (dispatch) => {
    // dispatch a message action
    dispatch(showMessage('Loading Todos'));

    // call a to-do service to retrieve data
    getTodos()
      .then(todos => dispatch(loadTodos(todos)));
  }
}

export const saveTodo = (name) => {
  return (dispatch) => {

    dispatch(showMessage('Saving Todo'));

    // call a to-do service to update to-do list
    createTodo(name)
      .then(res => dispatch(addTodo(res)));
  }
}

export const toggleTodo = (id) => {
  return (dispatch, getState) => {

    dispatch(showMessage('Saving todo update'));

    // retrieve the to-do array from state, using the second parameter from redux-thunk
    const { todos } = getState().todo;

    // find the to-do item with the matched id
    const todo = todos.find(todo => todo.id === id);

    // toggle the isComplete property
    const toggled = { ...todo, isComplete: !todo.isComplete }

    // call a to-do service to update the to-do
    updateTodo(toggled)
      .then(res => dispatch(replaceTodo(res)));
  }
}

export const deleteTodo = (id) => {
  return (dispatch) => {

    dispatch(showMessage('Removing Todo'));

    destroyTodo(id)
      .then(() => dispatch(removeTodo(id)))
  }
}

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.isComplete);
    case 'completed':
      return todos.filter(todo => todo.isComplete);
    default:
      return todos;
  }
}