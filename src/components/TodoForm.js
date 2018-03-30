import React from 'react'
import { connect } from 'react-redux';
import { updateCurrent } from '../reducers/todoReducer'


const TodoForm = ({ currentTodo, updateCurrent }) => {

  const handleInputChange = (event) => {
    const value = event.target.value;
    updateCurrent(value);
  }

  return (
    <form>
      <input type="text"
             onChange={handleInputChange}
             value={currentTodo} />
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    currentTodo: state.currentTodo,
  }
}

// connect() function wraps each action creator in a dispatch function
// so we do not need to use bindActionCreators()
const mapDispatchToProps = {
  updateCurrent
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
