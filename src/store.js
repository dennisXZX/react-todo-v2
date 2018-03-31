import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducer';

const appStore = createStore(
  todoReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default appStore;