import type {Todo} from "../types.ts"
import { useState } from 'react'

type EditCardProps = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    editingTodo: Todo | null,
    setEditingTodo:React.Dispatch<React.SetStateAction<Todo | null>>
}


function EditCard({todos, setTodos, editingTodo, setEditingTodo}: EditCardProps) {
    
    const [InputText, setInputText] = useState(
        editingTodo?.text ?? ""
    )

    function handleTodoChange(e: React.ChangeEvent<HTMLInputElement>){
        setInputText(e.target.value)
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
                value={InputText}
                onChange={handleTodoChange} />}
            </div>
            <div>
                <button>Cancel</button>
                <button>Save</button>
            </div>

        </div>
      
    </div>
  )
}

export default EditCard
