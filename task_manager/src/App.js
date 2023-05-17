import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  let [todos, setTodos] = useState(["Task 1", "Task 2"])
  return (
    <>
    <TodoList todos = {todos}/>
    <input type='text' />
    <button>Add A Task</button>
    <button>Clear Completed Tasks</button>
    <div></div>
    </>
  )
    
}

export default App;
