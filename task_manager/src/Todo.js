import React, { useState } from 'react'

export default function Todo({ todo, todoChange, todoUpdate }) {
  let [editMode, setEditMode] = useState(false)
  return (
    <div style={{display: "flex"}}>
       <input onChange={todoChange} type='checkbox' checked={todo.complete} />
      { editMode ?
      < input onBlur={() => setEditMode(false)} value={todo.name} onChange={todoUpdate}/> :
      <div onClick={() => setEditMode(true)}>
       
        
         
          {todo.name}
          
      </div>
}
    </div>
  )
}
