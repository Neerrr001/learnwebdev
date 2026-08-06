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
  
  const themeBody = screen === "light" ? " bg-white text-black " : "bg-gray-900 text-white "
  const themeButton = screen === "light" ? "bg-gray-100 text-black": "bg-gray-600 text-white"
  const themePlaceholder = screen === "light"? "placeholder-gray-500": "placeholder-white"
  
  return (
    <div className={` pt-5 gap-10 flex flex-col  items-center min-h-screen ${themeBody}`}>
      <DarkMode toggle={toggle} screen={screen}/>
      <h2 className='text-4xl font-bold'>My todos</h2>
      <div className='flex gap-3  justify-center items-center'>
        <input
        type="text"
        className={`${themePlaceholder} px-3 py-2 m-2 w-2xl focus:outline-none
                   focus:ring-1 border rounded-lg`}
        placeholder="enter"
        value= {input}
        onChange={(e) => setInput(e.target.value)} />
      
        <button 
          type="submit"
          className={`px-3 py-2 m-2 active:scale-95 rounded-lg cursor-pointer ${themeButton}`}
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
      </div>
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
