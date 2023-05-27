import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
// import uuidv5 from "uuid/v5"

function App() {
  let [todos, setTodos] = useState([])
  let todoNameRef = useRef()

function handleAddTask(e){
 const name = todoNameRef.current.value
 if (name === "") return
 setTodos(prevTodos => {
  return [...prevTodos, { id: 1, name: name, complete: false}]
 })
 todoNameRef.current.value = null
}

  return (
    <>
    <TodoList todos = {todos}/>
    <input ref={todoNameRef} type='text' />
    <button onClick={handleAddTask}>Add A Task</button>
    <button>Clear Completed Tasks</button>
    <div></div>
    </>
  )
    
}

export default App;
