
import type { Todo } from "../types"

type dropdownProps = {
    results: Todo[]
    onResultClick: (todo:Todo)=>void
    selectedSearchIdx:number
}

function Dropdown({results, onResultClick,selectedSearchIdx}:dropdownProps) {
 

  return (
    <div className="absolute ml-6 w-full bg-white rounded-lg top-full left-0 shadow-xl mt-1">
        {(results.length === 0)? (
            <div className="p-3 text-gray-500 hover:bg-gray-100 ">
                No matching results
            </div>
        ):(results.map((todo, idx)=>(
            <div 
            key={todo.id}
            className={` ${selectedSearchIdx === idx ? "bg-gray-100": ""} p-3 cursor-pointer hover:bg-gray-100`}
            onClick={()=> onResultClick(todo)}>
               {todo.title}
            </div>

        )))}
        
    </div>
  )
}

export default Dropdown
