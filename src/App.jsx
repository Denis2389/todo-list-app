import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if(input.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: input,
    };
  
    setTodos([...todos, newTodo])
    setInput("");
  }


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='wrapper'>
      <div>
        <input
          className='input'
          type="text"
          placeholder="Enter a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='button' onClick={addTodo}>Add</button>
      </div>

      <ul className='list'>
        {todos.map((todo) => (
          <li className='item' key={todo.id}>{todo.text} <button className='dltButton' onClick={() => deleteTodo(todo.id)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App
