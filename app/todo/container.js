import React from 'react';

import TodoHeader from './header.js';
import Todos from './todos.js';
import AddTodo from './add_todo.js';

export default () => {
  return (
    <div>
      <TodoHeader></TodoHeader>
      <Todos />
      <AddTodo />
    </div>
  );
};
