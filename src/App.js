import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCurrent } from './reducers/todoReducer';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Todo-App">
          <TodoForm
            currentTodo={this.props.currentTodo}
            changeCurrent={this.props.updateCurrent} />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentTodo: state.currentTodo,
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  // bindActionCreators wraps each action creator in a dispatch function
  return (
    bindActionCreators({
      updateCurrent
    }, dispatch)
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
