import React from 'react'
import Todo from './Todo'
export default function TodoList({ todos, handleChange }) {
  return (
    
        
        todos.map(todo => {
            return <Todo key={todo.id} todo={todo} todoChange={()=>handleChange(todo.id)}/>
        })
    
  )
}
