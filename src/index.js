import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { updateCurrent } from './reducers/todoReducer';

const todoChangeHandler = (value) => {
  store.dispatch(updateCurrent(value));
}

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <App
      todos={state.todos}
      currentTodo={state.currentTodo}
      changeCurrent={todoChangeHandler} />,
    document.getElementById('root')
  );
}

// render the initial UI
render();

// subscribe to the store
// a callback is executed anytime a piece of state is changed
store.subscribe(render);

registerServiceWorker();
