import React from 'react';
import { connect } from 'react-redux';

const TodoItem = ({ isComplete, name }) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={isComplete} />
      {name}
    </li>
  )
}

const TodoList = ({ todos }) => {
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

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);
