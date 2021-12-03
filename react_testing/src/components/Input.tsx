import React, { FC } from 'react'
interface props{
    showDiv:boolean
}
const Input:FC<props> = ({showDiv}) => {
    const [searchWord,setSearchWord]=React.useState<String>("")
    return (
        <div>
            <input 
            type="text"
            data-testid="searchBar"
            placeholder="Search ...."
            onChange={(e)=>setSearchWord(e.target.value)}/>
            <h1 data-testid="displaySearch">{searchWord}</h1>
            {showDiv&&(
                <div data-testid="divWeWantToShow">
                    Hey My Name is Ayman
                </div>
            )}
            
        </div>
    )
}

export default Input
