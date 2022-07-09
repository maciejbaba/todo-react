import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) { setTodos(storedTodos) }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete:false }]
    })
    todoNameRef.current.value = null
  }

  return (
    <div className='centered-div'>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={ handleAddTodo }>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </div>
  )
}

export default App;
