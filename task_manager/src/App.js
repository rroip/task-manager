import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  let [todos, setTodos] = useState([])
  let todoNameRef = useRef()

  
// Local storage //
useEffect(() => {
  
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodos) setTodos(storedTodos)
  }, [])

//
function handleAddTask(e){
 const name = todoNameRef.current.value
 if (name === "") return
 setTodos(prevTodos => {
  let newTodos = [...prevTodos, { id: prevTodos.length + 1, name: name, complete: false}]
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos))
  return newTodos
 })
 todoNameRef.current.value = null
}
function handleChange(id){
  let elementUpdate = todos.findIndex((item)=>{
    return item.id === id
  })
  todos[elementUpdate].complete = !todos[elementUpdate].complete
  setTodos([...todos])
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}
// Edit value
function handleUpdate(id, value){
  let elementUpdate = todos.findIndex((item)=>{
    return item.id === id
  })
  todos[elementUpdate].name = value
  setTodos([...todos])
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}

function handleClearTask(){
  const newTask = todos.filter(todo => !todo.complete)
  setTodos(newTask)
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}

  return (
    <>
    <TodoList todos = {todos} handleChange = {handleChange} handleUpdate = {handleUpdate}/> 
    
    <input ref={todoNameRef} type='text' />
    <button onClick={handleAddTask}>Add A Task</button>
    <button onClick={handleClearTask}>Clear Completed Tasks</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
    
}

export default App;
