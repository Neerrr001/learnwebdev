import sleepIcon from '../assets/sleep.png'
import sunIcon from '../assets/sun.png'

type DarkModeProps ={
  toggle:()=>void;
  screen: "light" | "dark"
}

function darkMode({toggle, screen} : DarkModeProps) {

  let icon;
  if(screen === "light"){
    icon = sleepIcon
  }else{
    icon = sunIcon
  }

  return (
    <div className='relative max-h-0.5'>
        <button 
        className='absolute bg-white px-2 py-2 top-4 right-4 border hover:bg-gray-100 cursor-pointer rounded-lg'
        onClick={toggle}>
          <img className='w-4 h-4' src= {icon} alt="" />
        </button>
      
    </div>
  )
}

export default darkMode
