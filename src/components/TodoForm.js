import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateCurrent, saveTodo } from '../reducers/todoReducer'


class TodoForm extends Component {
  handleInputChange = (event) => {
    const value = event.target.value;
    this.props.updateCurrent(value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveTodo(this.props.currentTodo);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               onChange={this.handleInputChange}
               value={this.props.currentTodo} />
      </form>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    currentTodo: state.todo.currentTodo,
  }
}

// connect() function wraps each action creator in a dispatch function
// so we do not need to use bindActionCreators()
const mapDispatchToProps = {
  updateCurrent,
  saveTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
