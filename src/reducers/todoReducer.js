const initState = {
  todos: [
    { id: 1, name: 'Render static UI', isComplete: true },
    { id: 2, name: 'Create Initial State', isComplete: true },
    { id: 3, name: 'Use State to Render UI', isComplete: false }
  ],
  currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE';
const TODO_ADD = 'TODO_ADD';

export const updateCurrent = (value) => {
  return {
    type: CURRENT_UPDATE,
    payload: value
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, todos: [...state.todos, action.payload]}
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    default:
      return state;
  }
}