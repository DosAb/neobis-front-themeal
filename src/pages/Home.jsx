import SearchList from "../components/SearchList"
import { getRandomMeal } from "../api"
import './home.scss'
import { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"

import useSearch from "../stores/useSearch"

export default function Home()
{
    const storeSearch = useSearch((state)=>{ return state.searchData ?? [] })

    const [randomMeal, setRandomMeal] = useState([])

    useEffect(()=>{
        getRandomMeal().then(( data ) => {
            const meal = data.data.meals[0]
            setRandomMeal(meal)
        })
    },[])


    return<>
        <div className="hero">
            <NavLink to={randomMeal.idMeal}>
                <h1>Make your<br/>
                    <span>Meal of the day</span> <br />
                    with us
                </h1>
            </NavLink>
            <div className="hero-circle">
                <img src={randomMeal.strMealThumb} alt="mealImage" />
            </div>
        </div>
        <div className="meals-container">
            {storeSearch.map((data, index)=>
                <SearchList key={data.idMeal} mealId={data.idMeal} mealImg={data.strMealThumb} mealName={data.strMeal} />
            )}
        </div>
    </>
}