import {
  TODO_ADD, TODOS_LOAD, TODO_REPLACE, TODO_REMOVE,
  MESSAGE_SHOW
} from '../actions/actionTypes';

const messageReducer = function (state='', action) {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload;
    case TODO_ADD:
    case TODOS_LOAD:
    case TODO_REPLACE:
    case TODO_REMOVE:
      return '';
    default:
      return state;
  }
};

export default messageReducer;