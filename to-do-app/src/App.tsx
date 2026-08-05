import { useState } from 'react'
import './App.css'
import DarkMode from './components/DarkMode.tsx'
function App() {

  type Todo = {
    id:number, 
    text:string, 
    completed:boolean
  }
  
  function toggle(){
    if(screen === "light"){
      setScreen("dark")
    }else{
      setScreen("light")
    }
  }

  
  
  const [screen, setScreen] = useState<"light" | "dark">("light")
  const [input, setInput] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  
  const themeBody = screen === "light" ? " bg-white text-black min-h-screen" : "bg-gray-900 text-white min-h-screen"
  
  return (
    <div className={themeBody}>
      <DarkMode toggle={toggle} screen={screen}/>
      <h2 className='text-4xl'>My todos</h2>
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
