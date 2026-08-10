import type {Todo} from "../types.ts"

type EditCardProps = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    editingTodo: Todo | null,
    setEditingTodo:React.Dispatch<React.SetStateAction<Todo | null>>
}

function EditCard({todos, setTodos, editingTodo, setEditingTodo}: EditCardProps) {
  return (
    <div>
      
    </div>
  )
}

export default EditCard
