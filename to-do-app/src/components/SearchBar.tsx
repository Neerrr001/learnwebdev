import searchIcon from '../assets/search.png'
import type {Todo} from '../types.ts'
import Dropdown from './Dropdown.tsx'

type searchBarProps = {
    search:string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
    results:Todo[]
}

function SearchBar({search, setSearch, results}: searchBarProps) {

  return (
    <div className='flex relative items-center gap-2 '>
        <img src={searchIcon} className='h-4' alt="" />
        <input
        className="px-3 py-2 border rounded-lg min-w-2xl"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e)=>
            setSearch(e.target.value)
        }
        />
        <div>
            {search.trim() !== "" &&
            <Dropdown results={results}/>
            }

        </div>
    </div>
  )
}

export default SearchBar
