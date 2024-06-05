import { useParams } from "react-router-dom"

import { getMealDetails } from "../api"
import { useEffect, useState } from "react"

export default function Detail()
{
    const {id} = useParams()

    const [mealData, setMealData] = useState([])
    const [mealIngredients, setMealIngredients] = useState([])


    useEffect(()=>{
        getMealDetails(id).then((data)=>{
            console.log(data.data.meals[0])
            setMealData(data.data.meals[0])
            let mealCount = 1
            const mealIngredientsArray = []
            while(data.data.meals[0][`strIngredient${mealCount}`]){
                // setMealIngredients
                const mealData = {
                    ingredient: data.data.meals[0][`strIngredient${mealCount}`],
                    measure: data.data.meals[0][`strMeasure${mealCount}`]
                }
                mealIngredientsArray.push(mealData)
                mealCount++
            }
            setMealIngredients(mealIngredientsArray)
        })
    },[])

    return (<>
        <div className="meal-info-container">
            <div className="meal-info">
                <h1>{mealData.strMeal}</h1>
                <h3>{mealData.strCategory}</h3>
                <h3>{mealData.strArea}</h3>
                <div className="meal-ingredients">
                    {mealIngredients.map((value, index)=>
                        <h2 key={value.ingredient}>
                            {value.ingredient} - 
                            <strong> {value.measure}</strong>
                        </h2>
                    )}
                </div>
            </div>
            <div className="meal-img-container">
                <img src={mealData.strMealThumb} alt="mealImg" />
            </div>
        </div>
        <div className="meal-instruction">
            <h1>instruction</h1>
            <p>{mealData.strInstructions}</p>
            <button><a href={mealData.strYoutube}>watch on youtube</a></button>
        </div>
    </>)
}