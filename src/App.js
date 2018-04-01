import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="Todo-App">
            <Message message='hello there' />
            <TodoForm />
            <Route path='/:filter?' render={({ match }) => (
              <TodoList filter={match.params.filter} />
            )}></Route>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
