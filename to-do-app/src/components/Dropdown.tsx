
import type { Todo } from "../types"

type dropdownProps = {
    results: Todo[]
}

function Dropdown({results}:dropdownProps) {
  return (
    <div className="absolute ml-6 w-full bg-white rounded-lg top-full left-0 shadow-xl mt-1">
        {(results.length === 0)? (
            <div className="p-3 hover:bg-gray-100 ">
                No matching results
            </div>
        ): (results.map((todo)=>(

            <div 
            key={todo.id}
            className="p-3 cursor-pointer hover:bg-gray-100">
               {todo.title}
            </div>

        )))}
        
    </div>
  )
}

export default Dropdown
