import { useState, useEffect } from 'react'
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
  const [todos, setTodos] = useState<Todo[]>(() =>{
    //initial state of todos
    const storeTodos = localStorage.getItem("todos");
    if(storeTodos !== null){
      const parseTodos = JSON.parse(storeTodos);
      return parseTodos
    }
    return [];
  })
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all")

  //inside filter(), the callback is supposed to return a boolean 
  const visibileTodos = todos.filter(todo => {
    if(filter === "all"){
      return true

    }else if(filter === "active"){
      return (todo.completed === false);

    }else{
      // filter = completed
      return todo.completed === true
    }
  })
  console.log("visible todos ",visibileTodos)
  
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
  }
  function handleCheckboxChange(id: number){
    const newTodos = todos.map((t)=>{
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
  
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  
  const themeBody = screen === "light" ? " bg-white text-black " : "bg-gray-800 text-white "
  const themeButton = screen === "light" ? "bg-gray-100 text-black": "bg-gray-600 text-white"
  const themePlaceholder = screen === "light"? "placeholder-gray-500": "placeholder-white"

  const themeTodo = (screen:string, completed: boolean) => {
    if(completed === true){
      if(screen === "light"){
        return "line-through decoration-gray-600 text-gray-500"
      }
      else{
        //screen === "dark"
        return "line-through decoration-gray-600 text-gray-300"
      }
    }
    return; 
  }
  
  return (
    <div className={` pt-5 gap-10 flex flex-col  items-center min-h-screen ${themeBody}`}>
      <DarkMode toggle={toggle} screen={screen}/>
      <h2 className='text-4xl font-bold'>My todos</h2>
      <div className='flex gap-3  justify-center items-center'>
        <input
        type="text"
        className={`${themePlaceholder} px-3 py-2 m-2 w-2xl focus:outline-none
                   focus:ring-1 border rounded-lg`}
        placeholder="add a task"
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
      <div className='max-w-2xl '>
        <ul className=''>
          {todos.map((todo,idx) =>(
            <li className='flex mb-1 items-baseline gap-2 w-full' key={idx}>
              <input
              type="checkbox"
              className=' border-2 cursor-pointer border-gray-400 hover:border-gray-950'
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange ={() => handleCheckboxChange(todo.id)}
              />
              <label 
              htmlFor={`todo-${todo.id}`}
              className={`leading-snug ${themeTodo(screen,todo.completed)}`}
              >{todo.text}
              </label>
              </li> 
          ))}
        </ul>
      </div>
        
    </div>
  )
}

export default App
