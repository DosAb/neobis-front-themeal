import useSearch from "../stores/useSearch"
import { useState } from "react"

export default function SearchList()
{
    const storeSearch = useSearch((state)=>{ return state.searchData })


    console.log(storeSearch)
    return<>
        <h2>Search List</h2>
        {storeSearch.map((data)=>{
            return <h1 key={data.idMeal}>{data.strMeal}</h1>

        })}
    </>
}