import {
  CURRENT_UPDATE, TODOS_LOAD, TODO_ADD,
  TODO_REMOVE, TODO_REPLACE
} from '../actions/actionTypes';

const initState = {
  todos: [],
  currentTodo: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return { ...state, currentTodo: '', todos: [...state.todos, action.payload] }
    case TODOS_LOAD:
      return { ...state, todos: action.payload }
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload }
    case TODO_REPLACE:
      return {
        ...state,
        todos: state.todos
          .map(todo => todo.id === action.payload.id ? action.payload : todo)
      }
    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos
          .filter(todo => todo.id !== action.payload)
      }
    default:
      return state;
  }
}