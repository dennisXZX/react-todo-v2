import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducer';

const appStore = createStore(
  todoReducer,
  applyMiddleware(thunk)
);

export default appStore;