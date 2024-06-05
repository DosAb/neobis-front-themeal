import { useParams } from "react-router-dom"

import { getMealDetails } from "../api"
import { useEffect, useState } from "react"

export default function Detail()
{
    const {id} = useParams()

    const [mealData, setMealData] = useState([])
    const [mealYoutubeEmbed, setMealYoutubeEmbed] = useState()
    const [mealIngredients, setMealIngredients] = useState([])

    function getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
    
        return (match && match[2].length === 11)
          ? match[2]
          : null;
    }


    useEffect(()=>{
        getMealDetails(id).then((data)=>{
            const meal = data.data.meals[0]
            console.log(meal)
            setMealData(meal)
            let mealCount = 1
            const mealIngredientsArray = []

            setMealYoutubeEmbed(getId(meal.strYoutube))

            //Get all available ingerdients
            while(meal[`strIngredient${mealCount}`]){
                // setMealIngredients
                const mealData = {
                    ingredient: meal[`strIngredient${mealCount}`],
                    measure: meal[`strMeasure${mealCount}`]
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
            <iframe width="420" height="315" allow="fullscreen;"
                src={`https://www.youtube.com/embed/${mealYoutubeEmbed}`}>
            </iframe>
            {/* <button><a href={mealData.strYoutube}>watch on youtube</a></button> */}
        </div>
    </>)
}