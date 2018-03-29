import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
  todos: [
    { id: 1, name: 'Render static UI', isComplete: true },
    { id: 2, name: 'Create Initial State', isComplete: true },
    { id: 3, name: 'Use State to Render UI', isComplete: false },
  ]
}

ReactDOM.render(<App todos={state.todos} />, document.getElementById('root'));
registerServiceWorker();
