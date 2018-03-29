import React from 'react'

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

export default TodoList;
