
type inputTodoProps = {
    input: string, 
    setInput:React.Dispatch<React.SetStateAction<string>>,
    handleKeyDown:(e: React.KeyboardEvent<HTMLTextAreaElement>)=> void,
    themePlaceHolder: string,
    title: string, 
    setTitle: React.Dispatch<React.SetStateAction<string>>
}

function AddTodo({input, setInput, handleKeyDown, themePlaceHolder, title, setTitle}: inputTodoProps) {

    
  return (
    <div className="flex p-2 flex-col gap-2">

        <input type="text" 
        className="px-3 py-2 m-2 font-semibold"
        placeholder="Title"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        />

        <textarea
          className={`${themePlaceHolder} px-3 py-2 m-2 w-2xl focus:outline-none
                    focus:ring-1 border rounded-lg`}
          placeholder="Details"
          value= {input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          />
      
    </div>
  )
}

export default AddTodo
