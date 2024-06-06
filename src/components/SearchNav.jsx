import { useState } from "react";
import { searchMeals } from "../api"

import useSearch from "../stores/useSearch"

export default function SearchNav()
{
    const getSearchData = useSearch((state)=> state.getSearchData )

    const [search, setSearch] = useState()

    const getSearch = (e) => {
        e.preventDefault()
        searchMeals(search).then((data) => {
            const meals = data.data.meals
            getSearchData(meals)
        })
    }

    return<>
         <form onSubmit={getSearch} className="search__form">
            <input placeholder="Find your meal" onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit">🔍</button>
        </form>
    </>
}