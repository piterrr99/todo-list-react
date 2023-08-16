import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({state, handleDelete, handleToggle}) => {
  return (
    
        <ul>
                {state.map((todo , i)=>{
                    return(                          
                            <TodoListItem todo={todo} i={i} handleDelete={handleDelete} handleToggle={handleToggle} key={todo.id}/>
                        )
                })}
            </ul>
  )
}
