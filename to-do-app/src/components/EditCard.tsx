import type {Todo} from "../types.ts"
import { useState, useEffect } from 'react'

type EditCardProps = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    editingTodo: Todo | null,
    setEditingTodo:React.Dispatch<React.SetStateAction<Todo | null>>
}


function EditCard({todos, setTodos, editingTodo, setEditingTodo}: EditCardProps) {
    
    const [inputText, setInputText] = useState(
        editingTodo?.text ?? ""
    )

    useEffect(() => {
      function handleKeyDown(e:KeyboardEvent){
        if(e.key === "Escape"){
            setEditingTodo(null);
        }
    }
      document.addEventListener("keydown", handleKeyDown);
    
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      }
    }, [])
    

    function handleTodoChange(e: React.ChangeEvent<HTMLInputElement>){
        setInputText(e.target.value)
    }

    function saveChanges(){
        const updatedTodos = todos.map((todo)=>{
            if(todo.id === editingTodo?.id){
                return {
                    ...todo, 
                    text:inputText
                }
            }
            return todo; 
        })
        setTodos(updatedTodos)
        setEditingTodo(null)
    }

    function deleteTodo(){
        const updatedTodos = todos.filter(todo => todo.id !== editingTodo?.id)

        setTodos(updatedTodos)
        setEditingTodo(null)
    }
    
    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>){
        if(e.key === "Enter" && (e.ctrlKey || e.metaKey)){
            saveChanges();
        }
    }


  return (
    <div className="fixed flex justify-center items-center inset-0 bg-black/40"
    onClick={()=>{
        setEditingTodo(null)
    }}>
        <div className="flex flex-col justify-between w-86 min-h-76 p-6 rounded-xl shadow-xl bg-white"
        onClick={(e)=>{
            e.stopPropagation()
        }}>
            
            <div>
                {editingTodo &&
                <input type="text"
                className="w-full p-2 text-xl font-semibold"
                value={inputText}
                onChange={handleTodoChange} 
                onKeyDown={handleKeyDown}/>}
            </div>
            <div className="flex justify-center items-center gap-3j">
                <button
                className="px-3 py-2 m-2 hover:ring bg-blue-400 active:scale-95 rounded-lg cursor-pointer font-semibold"
                onClick={saveChanges}>
                Save...
                </button>
                <button
                className="px-3 py-2 m-2 hover:ring bg-gray-200 active:scale-95 rounded-lg cursor-pointer font-semibold "
                onClick={()=>{
                    setEditingTodo(null);
                }}>
                Cancel
                </button>
                <button
                className="px-3 py-2 m-2 hover:ring bg-red-400 active:scale-95 rounded-lg cursor-pointer font-semibold "
                onClick={deleteTodo}>
                    Delete
                </button>
            </div>

        </div>
      
    </div>
  )
}

export default EditCard
