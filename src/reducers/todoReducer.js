import { getTodos } from '../lib/todoServices';

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

export const fetchTodos = () => {
  return (dispatch) => {
    getTodos()
      .then(todos => dispatch(loadTodos(todos)));
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, todos: [...state.todos, action.payload]}
    case TODOS_LOAD:
      return {...state, todos: action.payload }
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    default:
      return state;
  }
}