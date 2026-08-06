import { useState } from 'react'
import './App.css'
import DarkMode from './components/DarkMode.tsx'
function App() {

  type Todo = {
    id:number, 
    text:string, 
    completed:boolean
  }
  const [screen, setScreen] = useState<"light" | "dark">("light")
  const [input, setInput] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  
  function toggle(){
    if(screen === "light"){
      setScreen("dark")
    }else{
      setScreen("light")
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>){
    if(e.key === "Enter"){
      addTodo()
    }else{
      return
    }
  }

  function addTodo(){
    if(input.trim() === "")return; 
    setTodos([...todos, {id:Date.now(),text:input,completed:false}]);
    setInput("")
    console.log(todos)
  }
  function handleCheckboxChange(id: number){
    const newTodos = todos.map((t, i)=>{
      if(id === t.id){
        return {
          ...t,
          completed:!t.completed,
        }
      }else{
        return t
      }
    })
    setTodos(newTodos)
  }

  
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
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        />
      
        <button 
          type="submit"
          className={`px-3 py-2 m-2 active:scale-95 rounded-lg cursor-pointer ${themeButton}`}
          disabled = {input.trim() === ""}
          onClick={addTodo}
        >
            Submit
          </button>
      </div>
        <ul>
          {todos.map((todo,idx) =>(
            <li key={idx}>
              <input
              type="checkbox"
              id="todo-checkbox"
              checked={todo.completed}
              onChange ={() => handleCheckboxChange(todo.id)}
              />
              <label htmlFor='todo-checkbox'>{todo.text}</label>
              </li> 
          ))}
        </ul>
    </div>
  )
}

export default App
