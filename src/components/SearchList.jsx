import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function SearchList({mealName, mealId, mealImg})
{
    return<>
    <NavLink to={mealId}>
        <div className="search-meal-container">
            <img src={mealImg} alt="mealImg" />
            <h1>{mealName}</h1>
        </div>
    </NavLink>
    </>
}