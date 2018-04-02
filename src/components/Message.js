import React from 'react';
import { connect } from 'react-redux';

const Message = ({ message }) => {
  return (
    message
      ? <span className='message'>{ message }</span>
      : null
  )
};

function mapStateToProps(state) {
  return {
    message: state.message
  }
}


export default connect(mapStateToProps)(Message);
