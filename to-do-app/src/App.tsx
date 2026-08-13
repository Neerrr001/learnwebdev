import { useState, useEffect } from 'react'
import './App.css'
import DarkMode from './components/DarkMode.tsx'
import ClearHistory from './components/ClearHistory.tsx'
import Filter from './components/Filter.tsx'
import EditBtn from './components/EditBtn.tsx'
import type { Todo } from './types.ts'
import EditCard from './components/EditCard.tsx'
import InputTodo from './components/InputTodo.tsx'
import SearchBar from './components/SearchBar.tsx'
function App() {

  
  const [screen, setScreen] = useState<"light" | "dark">("light")
  const [input, setInput] = useState<string>("")
  const [searchText, setSearchText] = useState<string>("")
  const [title, setTitle] = useState<string>("")
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
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null)

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
  
  function toggle(){
    if(screen === "light"){
      setScreen("dark")
    }else{
      setScreen("light")
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>){
    if(e.key === "Enter" && (e.ctrlKey || e.metaKey)){
      addTodo()
    }else{
      return
    }
  }

  function handleTitleDown(e:React.KeyboardEvent<HTMLInputElement>){
    if(e.key === "Enter" && (e.ctrlKey || e.metaKey)){
      addTodo()
    }else{
      return ;
    }
  }

  function addTodo(){
    if(input.trim() === "" && title.trim() === "")return; 
    setTodos([...todos, {
      id:Date.now(),
      title:title.trim() === ""? "No title":title,
      text:input.trim()===""?"No description":input,
      completed:false
    }]);
    setTitle("")
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

  
  const themeBody = screen === "light" ? " bg-white text-black " : "bg-gray-900 text-white "
  const themeButton = screen === "light" ? "bg-gray-100 text-black": "bg-gray-600 text-white"
  const themePlaceHolder = screen === "light"? "placeholder-gray-500": "placeholder-white"

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
    <div className={`flex flex-col gap-4 min-h-screen ${themeBody}`}>
      
        <div className="my-2 px-6 flex justify-center gap-6 items-start ">
          <div className='w-1/2'>
            <SearchBar/>
          </div>
          <div className='flex gap-4'>

            <DarkMode toggle={toggle} screen={screen}/>
            <ClearHistory setTodos={setTodos} />
            <Filter filter ={filter} setFilter={setFilter} screen ={screen}/>
          </div>
        </div>
      
      <div className="flex flex-col gap-5 mt-10 items-center justify-center">
        <h2 className='text-4xl font-bold'>My todos</h2>
        <div className='flex gap-3  justify-center items-center'>
          <InputTodo input={input} setInput={setInput} handleKeyDown={handleKeyDown}
          themePlaceHolder={themePlaceHolder}
          title={title} setTitle={setTitle}  handleTitleDown={handleTitleDown}/>
        
          <button 
            type="submit"
            className={`px-3 py-2 m-2 active:scale-95 rounded-lg cursor-pointer ${themeButton}`}
            disabled = {input.trim() === ""}
            onClick={addTodo}>
              Submit
          </button>
        </div>
        <div className='max-w-2xl '>
          <ul className=''>
            {visibileTodos.map((todo,idx) =>(
              <li className='flex justify-start items-center gap-2 w-full' key={idx}>
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
                >{todo.title === "No title"? todo.text:todo.title}
                </label>
                <EditBtn todo={todo} setEditingTodo={setEditingTodo}/>
              </li> 
            ))}
          </ul>
        </div>
        <div>
          {editingTodo &&
          <EditCard todos={todos} setTodos={setTodos} editingTodo={editingTodo} setEditingTodo={setEditingTodo} title={title}/>}
        </div>
      </div>
        
    </div>
  )
}

export default App
