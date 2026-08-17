type inputTodoProps = {
    input: string, 
    setInput:React.Dispatch<React.SetStateAction<string>>,
    handleKeyDown:(e: React.KeyboardEvent<HTMLTextAreaElement>)=>void,
    themePlaceHolder: string,
    title: string, 
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    handleTitleDown:(e: React.KeyboardEvent<HTMLInputElement>) => void; 
}

function InputTodo({input, setInput, handleKeyDown, themePlaceHolder, title, setTitle, handleTitleDown}: inputTodoProps) {

    
  return (
    <div className="flex p-2 flex-col gap-2 border rounded-lg focus-within:ring-1 ">

        <input type="text" 
        className="px-3 py-2 m-2 font-semibold w-full border-none outline-none focus:outline-none"
        placeholder="Title"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        onKeyDown={handleTitleDown}
        />

        <textarea
          className={`${themePlaceHolder} field-sizing-content px-3 py-2 m-2 w-2xl border-none outline-none focus:outline-none`}
          placeholder="Details"
          value= {input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          />
      
    </div>
  )
}

export default InputTodo
