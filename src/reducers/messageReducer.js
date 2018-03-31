import { TODO_ADD, TODOS_LOAD } from './todoReducer';

const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const showMessage = (message) => {
  return {
    type: MESSAGE_SHOW,
    payload: message
  }
}

export default function (state='', action) {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload;
    case TODO_ADD:
      return '';
    case TODOS_LOAD:
      return '';
    default:
      return state;
  }
}