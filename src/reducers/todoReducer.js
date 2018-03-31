import { createTodo, getTodos } from '../lib/todoServices'

const initState = {
  todos: [],
  currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE';
const TODO_ADD = 'TODO_ADD';
const TODOS_LOAD = 'TODOS_LOAD';

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
    getTodos()
      .then(todos => dispatch(loadTodos(todos)));
  }
}

export const saveTodo = (name) => {
  return (dispatch) => {
    createTodo(name)
      .then(res => dispatch(addTodo(res)))
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