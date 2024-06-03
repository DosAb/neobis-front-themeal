import { useState } from "react";
import { searchMeals } from "../api"

import useSearch from "../stores/useSearch"

export default function SearchNav()
{
    const [storeSearch, setStoreSearch] = useState(useSearch((state)=>{ return state.searchData }))

    const getSearchData = useSearch((state)=>{ return state.getSearchData })

    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])

    const submit = (e) => {
        e.preventDefault()
        searchMeals(search).then(({ data }) => {
            setSearchResult(data.meals)
            getSearchData(data.meals)
        })
    }

    return<>
         <form onSubmit={submit} className="search-block">
            <input
            type="tel"
            // value=
            placeholder="Find your meal"
            onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    </>
}