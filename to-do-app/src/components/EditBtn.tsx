import editIcon from '../assets/compose.png'

function EditBtn() {
  return (
    <div>
      <button
      className='p-2 cursor-pointer active:scale-95'>
        <img src={editIcon} alt="Edit"
        className='ml-2 w-5 h-5'/>
      </button>
    </div>
  )
}

export default EditBtn
