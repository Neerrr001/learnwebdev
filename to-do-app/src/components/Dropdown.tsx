
import type { Todo } from "../types"

type dropdownProps = {
    results: Todo[]
    onResultClick: (todo:Todo)=>void
    selectedSearchIdx:number
    screen:"light" | "dark"
}

function Dropdown({results, onResultClick,selectedSearchIdx, screen}:dropdownProps) {
 
    const themeholder = (()=>{
        if(screen === "dark"){
            return "bg-gray-800"
        }
        return "bg-white"
    })

    const themeHover = screen === "dark"? "hover:bg-gray-700": "hover:bg-gray-100"
    const themeSelected = screen === "dark"? "bg-gray-700":"bg-gray-100"

  return (
    <div className={` ${themeholder()} absolute ml-6 w-full  rounded-lg top-full left-0 shadow-xl mt-1`}>
        {(results.length === 0)? (
            <div className={`p-3 text-gray-500 ${themeHover}`}>
                No matching results
            </div>
        ):(results.map((todo, idx)=>(
            <div 
            key={todo.id}
            className={` ${selectedSearchIdx === idx ? `${themeSelected}`: ""} p-3 cursor-pointer ${themeHover}`}
            onClick={()=> onResultClick(todo)}>
               {todo.title}
            </div>

        )))}
        
    </div>
  )
}

export default Dropdown
