import editIcon from '../assets/compose.png'
import type {Todo} from '../types.ts'

type EditBtnProps = {
    todo: Todo,
    setEditingTodo: React.Dispatch<React.SetStateAction<Todo | null>>
}

function EditBtn({todo, setEditingTodo}: EditBtnProps) {
  return (
    <div>
      <button
      className='p-2 focus:outline-none focus:ring cursor-pointer active:scale-95'
      onClick={()=>{
        setEditingTodo(todo)
        
      }}>
        <img src={editIcon} alt="Edit"
        className='ml-2 w-5 h-5'/>
      </button>
    </div>
  )
}

export default EditBtn
