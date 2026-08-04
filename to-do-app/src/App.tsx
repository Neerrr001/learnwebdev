import { useState } from 'react'
function App() {

  const [input, setInput] = useState("")

  
  return (
    <div>
      <h2>My todos</h2>
      <input
       type="text"
       placeholder="enter"
       value= {input}
       onChange={(e) => setInput(e.target.value)} />
       <p>{input}</p>
      <button>Submit</button>
    </div>
  )
}

export default App
