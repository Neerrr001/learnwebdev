type FilterProps = {
  filter: "all" | "active" | "completed",
  setFilter: React.Dispatch<React.SetStateAction<"all" | "active" | "completed">>
}

function Filter({filter, setFilter}: FilterProps) {
  return (
    <div className="relative ">  
        <select name="" id=""
        className=""
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
