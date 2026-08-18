import lmsearchIcon from '../assets/search.png'
import dmsearchIcon from '../assets/dmsearch.png'
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
    themePlaceHolder: string,
    screen: "light" | "dark";
}

function SearchBar({search, setSearch, results, onResultClick, isDropdownOpen,setisDropdownOpen
    ,selectedSearchIdx, setSelectedSearchIdx, themePlaceHolder,screen, 
}: searchBarProps) {

    let icon; 
    screen === "light"? icon = lmsearchIcon: icon = dmsearchIcon;

  return (
    <div className='flex relative items-center gap-2 '>
        <img src={icon} className='h-4' alt="" />
        <input
        className={` ${themePlaceHolder} px-3 py-2  border rounded-lg min-w-2xl`}
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e)=>{
            setSearch(e.target.value)
            setisDropdownOpen(true);
        }}
        onKeyDown={(e)=>{
            if(e.key === "Escape"){
                setSelectedSearchIdx(0)
                setisDropdownOpen(false)
            }
            else if(results.length === 0){
                return ; 
            }
            else if(e.key === "ArrowDown"){
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

            }
            else if(e.key === "Enter"){
                const todo = results[selectedSearchIdx]
                onResultClick(todo);
            }
        }}
        />
        <div>
            {search.trim() !== "" && isDropdownOpen && 
            <Dropdown results={results} onResultClick={onResultClick}
            selectedSearchIdx={selectedSearchIdx} screen ={screen}/>
            }
        </div>
    </div>
  )
}

export default SearchBar
