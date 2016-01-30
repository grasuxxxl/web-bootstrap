import React from 'react';
import { connect } from 'react-redux';

const mapToProps = ({todos}) => {
  return  { todos };
};

export default connect(mapToProps) (({ todos }) => {

  return (
    <div>
      { todos.map(todo => <div>{todo.text}</div>) }
    </div>
  );
});
