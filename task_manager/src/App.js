import React, { useState, useRef } from 'react';
import TodoList from './TodoList';


function App() {
  let [todos, setTodos] = useState([])
  let todoNameRef = useRef()

function handleAddTask(e){
 const name = todoNameRef.current.value
 if (name === "") return
 setTodos(prevTodos => {
  return [...prevTodos, { id: prevTodos.length + 1, name: name, complete: false}]
 })
 todoNameRef.current.value = null
}
function handleChange(id){
  let elementUpdate = todos.findIndex((item)=>{
    return item.id === id
  })
  todos[elementUpdate].complete = !todos[elementUpdate].complete
  setTodos([...todos])
}

  return (
    <>
    <TodoList todos = {todos} handleChange = {handleChange}/> 
    <input ref={todoNameRef} type='text' />
    <button onClick={handleAddTask}>Add A Task</button>
    <button>Clear Completed Tasks</button>
    <div></div>
    </>
  )
    
}

export default App;
