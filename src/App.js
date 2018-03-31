import React, { Component } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Todo-App">
          <Message message='hello there' />
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
