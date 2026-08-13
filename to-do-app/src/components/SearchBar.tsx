import searchIcon from '../assets/search.png'
function SearchBar() {
  return (
    <div className='flex items-center gap-2 '>
        <img src={searchIcon} className='h-4' alt="" />
      <input
      className="px-3 py-2 border rounded-lg min-w-2xl"
      type="text"
      placeholder="search"/>
    </div>
  )
}

export default SearchBar
