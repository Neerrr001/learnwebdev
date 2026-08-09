import React from 'react'
import type { Todo }  from '../types.ts'

type clearHistoryProps = {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function ClearHistory({setTodos}:clearHistoryProps ) {

  return (
    <div>
      <button 
      className='px-3 py-1 rounded-lg active:scale-95 cursor-pointer border '
      onClick={()=>{
        setTodos([]);
      }}>
        Clear
      </button>
    </div>
  )
}

export default ClearHistory
