import React from 'react'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({handleInputAdd}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e)=>{
        
        e.preventDefault();

        if(description.trim().length <= 1){
            return
        };

        const newTodo = {
                
            id: new Date().getTime(),
            desc: description,
            done: false       
        };
        
        handleInputAdd(newTodo);
        reset();
    }

    return (

            <form 
                data-testid='formAdd' 
                onSubmit={handleSubmit}
            >

                <h4>Agregar TODO</h4>
                <hr />
                <input
                    type='text'
                    name='description'
                    className='form-control'
                    placeholder='Aprender...'
                    value={description}
                    onChange={handleInputChange}
                    autoComplete='off'
                />
                <button
                    className='btn btn-primary btn-block mt-3'
                    type='submit'
                >
                    Agregar tarea
                </button>
            </form>

    )
}
