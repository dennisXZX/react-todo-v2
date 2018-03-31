import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducer';
import messageReducer from './reducers/messageReducer';

const appReducer = combineReducers({
  todo: todoReducer,
  message: messageReducer
});

const appStore = createStore(
  appReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default appStore;