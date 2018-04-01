import { MESSAGE_SHOW } from './actionTypes';

export const showMessage = (message) => {
  return {
    type: MESSAGE_SHOW,
    payload: message
  }
}
