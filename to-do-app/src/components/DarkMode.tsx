import sleepIcon from '../assets/sleep.png'
import { useState } from 'react'

type DarkModeProps ={
  toggle:()=>void
  screen: string
}

function darkMode({toggle, screen} : DarkModeProps) {

  return (
    <div className='relative max-h-0.5'>
        <button 
        className='absolute px-2 py-2 top-4 right-4 border hover:bg-gray-100 cursor-pointer rounded-lg'
        onClick={toggle}>
            <img className='w-4 h-4' src= {sleepIcon} alt="" />
        </button>
      
    </div>
  )
}

export default darkMode
