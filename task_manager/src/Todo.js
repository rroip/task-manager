import React from 'react'

export default function Todo({ todo, todoChange }) {
  return (
    <div>
        <label>
        <input onChange = {todoChange} type='checkbox' checked={todo.complete} />
        {todo.name}
        </label>
    </div>
  )
}
