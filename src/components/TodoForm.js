import React from 'react'

const TodoForm = (props) => {
  const { currentTodo, changeCurrent } = props;

  const handleInputChange = (event) => {
    const value = event.target.value;
    changeCurrent(value);
  }

  return (
    <form>
      <input type="text"
             onChange={handleInputChange}
             value={currentTodo} />
    </form>
  )
}

export default TodoForm;
