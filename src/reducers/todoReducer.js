import { createTodo, getTodos } from '../lib/todoServices';
import { showMessage } from './messageReducer';

const initState = {
  todos: [],
  currentTodo: ''
}

export const TODO_ADD = 'TODO_ADD';
export const TODOS_LOAD = 'TODOS_LOAD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

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
    // dispatch a message action
    dispatch(showMessage('Saving Todo'));

    // call a to-do service to update to-do list
    createTodo(name)
      .then(res => dispatch(addTodo(res)));
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return { ...state, currentTodo: '', todos: [...state.todos, action.payload] }
    case TODOS_LOAD:
      return { ...state, todos: action.payload }
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload }
    default:
      return state;
  }
}