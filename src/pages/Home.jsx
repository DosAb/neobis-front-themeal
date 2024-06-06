import SearchList from "../components/SearchList"
import { getRandomMeal } from "../api"
import './home.scss'
import { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import Hero from "../components/Hero"

import useSearch from "../stores/useSearch"

export default function Home()
{
    const storeSearch = useSearch((state)=> state.searchData ?? [])

    console.log(storeSearch)

    const [randomMeal, setRandomMeal] = useState([])

    useEffect(()=>{
        getRandomMeal().then(( data ) => {
            const meal = data.data.meals[0]
            setRandomMeal(meal)
        })
    },[])


    return<>
        <Hero mealImg={randomMeal.strMealThumb} mealId={randomMeal.idMeal} />

        <div className="meals-container">
            {storeSearch.map((data, index)=>
                <SearchList key={data.idMeal} mealId={data.idMeal} mealImg={data.strMealThumb} mealName={data.strMeal} />
            )}
        </div>
    </>
}