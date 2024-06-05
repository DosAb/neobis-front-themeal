import { useEffect, useState } from "react"
import { getCategories } from "../api"

export default function Category()
{
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories().then((data)=>{
            const categoriesArray = data.data.categories
            console.log(categoriesArray)
            setCategories(categoriesArray)
        })
    },[])
    return <>
        <div className="meals-container">            
        {categories.map((data)=>
            <div key={data.idCategory} className="meal-category">
                <h1>{data.strCategory}</h1>
                <div className="meal-img-container">
                    <img src={data.strCategoryThumb} alt="categoryImg" />
                </div>
                {/* <p>{data.strCategoryDescription}</p> */}
            </div>
        )}
        </div>
    </>
}