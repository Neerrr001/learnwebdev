type FilterProps = {
  filter: "all" | "active" | "completed",
  setFilter: React.Dispatch<React.SetStateAction<"all" | "active" | "completed">>,
  screen: "light" | "dark"
}

function Filter({filter, setFilter, screen}: FilterProps) {
  
  const themeFilter = screen === "light" ? "bg-white text-black border-gray-300" : "bg-gray-900 text-white border-gray-600"

  return (
    <div className="relative ">  
        <select name="" id=""
        className={`${themeFilter} mt-1 rounded-lg cursor-pointer`}
        value={filter}
        onChange={(e) =>{
          const value = e.target.value as "all" | "active" | "completed"
          setFilter(value)
        }}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      
    </div>
  )
}

export default Filter
