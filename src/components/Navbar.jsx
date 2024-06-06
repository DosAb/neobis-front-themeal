import { NavLink, Routes, Route } from "react-router-dom"
import SearchNav from "./SearchNav"
import Detail from "../pages/Detail"

function Navbar() {


    return (
        <header className="header">
            <NavLink to={"/"} className="logo" >FOOD<span>zie</span></NavLink>
            <nav>
                <SearchNav />
                <NavLink to="/category" >category</NavLink>
            </nav>
        </header>
    )
}

export default Navbar