import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, toggleTodo, deleteTodo, getVisibleTodos } from '../actions/index';

const TodoItem = ({ id, isComplete, name, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <span className="delete-item">
        <button onClick={() => deleteTodo(id)}>X</button>
      </span>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={() => toggleTodo(id)} />
      {name}
    </li>
  )
};

class TodoList extends Component {

  render() {
    const { todos } = this.props;

    return (
      <div className="Todo-List">
        <ul>
          {todos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                toggleTodo={this.props.toggleTodo}
                deleteTodo={this.props.deleteTodo}
                {...todo} />
            )
          })}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchTodos();
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todo.todos, ownProps.filter)
  }
};

const mapDispatchToProps = {
  fetchTodos,
  toggleTodo,
  deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
