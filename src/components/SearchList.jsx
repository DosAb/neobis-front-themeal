import { useState } from "react"

export default function SearchList({mealName, mealId, mealImg})
{
    return<>
    <div className="search-meal-container">
        <img src={mealImg} alt="mealImg" />
        <h1 key={mealId}>{mealName}</h1>
    </div>
    </>
}