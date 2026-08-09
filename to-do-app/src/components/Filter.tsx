type FilterProps = {
  filter: "all" | "active" | "completed",
  setFilter: React.Dispatch<React.SetStateAction<"all" | "active" | "completed">>
}

function filter({filter, setFilter}: FilterProps) {
  return (
    <div className="relative ">  
        <select name="" id=""
        className=""
        value={filter}
        onChange={(e)=>{
          const value = e.target.value
          setFilter(value)
        }}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      
    </div>
  )
}

export default filter
