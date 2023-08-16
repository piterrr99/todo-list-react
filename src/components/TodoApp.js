import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css'





export const TodoApp = () => {

    // const initialState = [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];

    const init = ()=>{
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const [state, dispatch] = useReducer( todoReducer, [], init);
    

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(state))
    
    }, [state])
    
    

    const handleInputAdd = (newTodo)=>{
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    const handleDelete = (todoId)=>{
        
        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch(action);

    };

    const handleToggle = (todoId)=>{
        
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

  return (
    <div>
        <h1> TodoApp {`(${state.length})`} </h1>
        <hr />

        <div className='container'>
            
            <TodoList state={state} handleDelete={handleDelete} handleToggle={handleToggle} key={new Date().getTime()}/>
                
            <TodoAdd handleInputAdd={handleInputAdd} />
        </div>
    </div>
  )
}
