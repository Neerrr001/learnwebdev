import searchIcon from '../assets/search.png'
import type {Todo} from '../types.ts'
import Dropdown from './Dropdown.tsx'

type searchBarProps = {
    search:string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    results:Todo[];
    onResultClick:(todo:Todo)=>void;
    isDropdownOpen: boolean;
    setisDropdownOpen:React.Dispatch<React.SetStateAction<boolean>>;
    selectedSearchIdx: number;
    setSelectedSearchIdx: React.Dispatch<React.SetStateAction<number>>;
}

function SearchBar({search, setSearch, results, onResultClick, isDropdownOpen,setisDropdownOpen
    ,selectedSearchIdx, setSelectedSearchIdx
}: searchBarProps) {

  return (
    <div className='flex relative items-center gap-2 '>
        <img src={searchIcon} className='h-4' alt="" />
        <input
        className="px-3 py-2  border rounded-lg min-w-2xl"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e)=>{
            setSearch(e.target.value)
            setisDropdownOpen(true);
        }}
        onKeyDown={(e)=>{
            if(e.key === "ArrowDown"){
                if(selectedSearchIdx === results.length-1){
                    setSelectedSearchIdx(0);
                }else{
                    setSelectedSearchIdx(selectedSearchIdx+1);
                }

            }else if(e.key === "ArrowUp"){
                if(selectedSearchIdx === 0){
                    setSelectedSearchIdx(results.length-1);
                }else{
                    setSelectedSearchIdx(selectedSearchIdx-1)
                }

            }else if(e.key === "Escape"){
                setisDropdownOpen(false)
            }
            console.log(selectedSearchIdx)
        }}
        />
        <div>
            {search.trim() !== "" && isDropdownOpen && 
            <Dropdown results={results} onResultClick={onResultClick}
            selectedSearchIdx={selectedSearchIdx}/>
            }
        </div>
    </div>
  )
}

export default SearchBar
