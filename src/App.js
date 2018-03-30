import React, { Component } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Todo-App">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
