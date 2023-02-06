import './App.css';
import { useState, useEffect } from 'react';

import TodoItem from './components/TodoItem/TodoItem';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const [todos, setTodos] = useState([
    { id: 0, task: "Köp kaffe", done: true },
    { id: 1, task: "Köp kaka", done: false },
    { id: 2, task: "Brygg kaffe", done: false },
    { id: 3, task: "Drick kaffe", done: false },
  ]);

  useEffect(() => {
    console.log('Use effect körs, state uppdaterats');
  }); // Körs varje gång vårt state uppdateras, i detta fall när setTodos körs

  useEffect(() => {
    async function getTodos() {
      const response = await fetch('https://dummyjson.com/todos');
      const data = await response.json();

      setTodos(data.todos);
    }

    getTodos();
  }, []); // Tom array ([]) betyder att denna useEffect-funktion enbarts körs en gång vid sidladdning, sedan ej mer

  useEffect(() => {

  }, [todos]) // // Denna useEffect körs varje gång state todos uppdateras

  function newTodo(todo) {
    const newTodo = {
      id: todos.length,
      task: todo,
      done: false
    }

    setTodos((currentTodos) => {
      return [...currentTodos, newTodo];
    });
  }

  const todosComponents = todos.map((todo) => {
    return <TodoItem task={ todo.todo } done={ todo.completed } key={ todo.id } />
  });

  console.log(todosComponents);

  return (
    <div className="App">
      <ul className='todos'>
        { todosComponents.length > 0 ? todosComponents : <h2>Inga todos</h2> }
      </ul>
      <AddTodo newTodo={ newTodo } />
    </div>
  )
}

export default App
