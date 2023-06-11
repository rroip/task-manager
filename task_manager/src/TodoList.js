import React from 'react'
import Todo from './Todo'
// handleChange for edit
export default function TodoList({ todos, handleChange, handleUpdate }) {
  return (
    
        
        todos.map(todo => {
            return <Todo key={todo.id} todo={todo} todoChange={()=>handleChange(todo.id)} todoUpdate={(event) => handleUpdate(todo.id, event.target.value)}/>
        })
    
  )
}
