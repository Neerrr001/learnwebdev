import type {Todo} from "../types.ts"

type EditCardProps = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    editingTodo: Todo | null,
    setEditingTodo:React.Dispatch<React.SetStateAction<Todo | null>>
}

function EditCard({todos, setTodos, editingTodo, setEditingTodo}: EditCardProps) {
  return (
    <div className="fixed flex justify-center items-center inset-0 bg-black/40">
        <div className="w-96 p-6 rounded-xl shadow-xl bg-white ">
            
        </div>
      
    </div>
  )
}

export default EditCard
