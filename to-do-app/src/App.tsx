import { useState } from 'react'
import './App.css'
function App() {

  const [input, setInput] = useState<string>("")
  const [todos, setTodos] = useState<string[]>([])

  
  return (
    <div>
      <h2>My todos</h2>
      <input
       type="text"
       placeholder="enter"
       value= {input}
       onChange={(e) => setInput(e.target.value)} />
    
      <button 
        type="submit"
        disabled = {input.trim() === ""}
        onClick={()=>{
          if(input.trim() === "")return; 
          setTodos([...todos, input]);
          setInput("")
          console.log(todos)
        }
        }>
          Submit
        </button>
        <ul>
          {todos.map((todo,idx) =>(
            <li key={idx}>
              {todo}
              <button
               type="reset"
               onClick={()=>{
                setTodos(todos.filter((_,i)=> i !== idx))
               }}
              >Delete</button>
              </li> 
          ))}
        </ul>
    </div>
  )
}

export default App
