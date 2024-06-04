import { useParams } from "react-router-dom"

import { getMealDetails } from "../api"
import { useEffect, useState } from "react"

export default function Detail()
{
    const {id} = useParams()
    console.log(id)

    const [mealData, setMealData] = useState([])

    useEffect(()=>{
        getMealDetails(id).then((data)=>{
            setMealData(data.data.meals[0])
            console.log(data.data.meals[0])
        })
    },[])

    return (<>
        <h1>{mealData.strMeal}</h1>
        <img src={mealData.strMealThumb} alt="mealImg" />
    </>)
}