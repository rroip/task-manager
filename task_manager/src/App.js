import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <>
    <TodoList />
    <input type='text' />
    <button>Add A Task</button>
    <button>Clear Completed Tasks</button>
    <div></div>
    </>
  )
    
}

export default App;
