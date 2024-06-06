import { NavLink } from "react-router-dom"

export default function Hero({mealImg, mealId}){
    return<>
    <div className="hero" >
        <NavLink to={mealId}>
            <h1>Make your<br/>
                <span>Meal of the day</span> <br />
                with us
            </h1>
        </NavLink>
        <div className="hero-circle">
            <img src={mealImg} alt="mealImage" />
        </div>
    </div>
    </>
}