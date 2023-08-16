import React from 'react'


export const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
    return (
        <>
            <div >
                <li
                    // key={todo.id}
                    onClick={() => handleToggle(todo.id)}
                    className={`list-group-item ${todo.done && 'complete'}`}
                >
                    {i + 1}. {todo.desc}
                </li>
                <button
                    className='btn btn-danger'
                    onClick={() => handleDelete(todo.id)}
                >
                    Borrar
                </button>

            </div>
            <hr />
        </>
    )
};
