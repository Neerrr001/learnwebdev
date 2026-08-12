
type addTodoProps = {
    input: string, 
    setInput:React.Dispatch<React.SetStateAction<string>>,
    handleKeyDown:(e: React.KeyboardEvent<HTMLInputElement>)=> void,
    themePlaceHolder: string
}

function AddTodo({input, setInput, handleKeyDown, themePlaceHolder}: addTodoProps) {

    


  return (
    <div>
        <input
          type="text"
          className={`${themePlaceHolder} px-3 py-2 m-2 w-2xl focus:outline-none
                    focus:ring-1 border rounded-lg`}
          placeholder="add a task"
          value= {input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          />
      
    </div>
  )
}

export default AddTodo
