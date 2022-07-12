import React from 'react';

export default function Todo({ todo, toggleTodo }) {

  function handeTodoClick(){
    toggleTodo(todo.id);
  }

  return (
    <div>
        <label>
        <input type="checkbox" checked={todo.complete} onChange={handeTodoClick} ></input>
        {todo.name}
        </label>
    </div>
  )
}
