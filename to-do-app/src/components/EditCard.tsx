import type {Todo} from "../types.ts"
import { useState } from 'react'

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

  return (
    <div className="fixed flex justify-center items-center inset-0 bg-black/40">
        <div className="w-86 min-h-76 p-6 rounded-xl shadow-xl bg-white ">
            <div>
                <h3>Edit Todo</h3>
            </div>
            <div>
                {editingTodo &&
                <input type="text"
                value={inputText}
                onChange={handleTodoChange} />}
            </div>
            <div>
                <button
                className="px-3 py-2 m-2 bg-gray-200 active:scale-95 rounded-lg cursor-pointer"
                onClick={()=>{
                    setEditingTodo(null);
                }}>
                Cancel
                </button>
                <button
                className="px-3 py-2 m-2 bg-gray-200 active:scale-95 rounded-lg cursor-pointer"
                onClick={saveChanges}>
                Save
                </button>
            </div>

        </div>
      
    </div>
  )
}

export default EditCard
