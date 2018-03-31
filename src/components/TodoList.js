import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../reducers/todoReducer';

const TodoItem = ({ isComplete, name }) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={isComplete} />
      {name}
    </li>
  )
}

class TodoList extends Component {

  render() {
    const { todos } = this.props;

    return (
      <div className="Todo-List">
        <ul>
          {todos.map(todo => {
            return (
              <TodoItem key={todo.id} {...todo} />
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

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  }
}

const mapDispatchToProps = {
  fetchTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
