import { useState } from 'react'
import './App.css'
function App() {

  type Todo = {
    id:number, 
    text:string, 
    completed:boolean
  }

  const [input, setInput] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  
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
          setTodos([...todos, {
            id:Date.now(),
            text:input,
            completed:false
          }]);
          setInput("")
          console.log(todos)
        }
        }>
          Submit
        </button>
        <ul>
          {todos.map((todo,idx) =>(
            <li key={idx}>
              {todo.text}
              <button
               type="reset"
               onClick={()=>{
                setTodos(
                  todos.map((t,i)=>{
                    if(i == idx){
                      return{
                        ...t, 
                        completed:!t.completed,
                      }
                    }
                    return t; 
                  })
                )
               }}
              >{todo.completed?"Completed":"Pending"}</button>
              </li> 
          ))}
        </ul>
    </div>
  )
}

export default App
